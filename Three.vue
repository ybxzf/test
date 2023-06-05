<template>
  <div id="my-stats"></div>
  <div id="my-three"></div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/addons/libs/stats.module.js";

const data = reactive({
  width: window.innerWidth,
  height: window.innerHeight,
  init() {
    //创建场景
    const scene = new THREE.Scene()
    //添加网格模型
    const geometry = new THREE.BoxGeometry(100, 100, 100)//物体
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 })//材质
    const mesh = new THREE.Mesh(geometry, material)//网格模型
    mesh.position.set(0, 0, 0)//设置坐标
    const axesHelper = new THREE.AxesHelper(150)//坐标轴
    const pointLightX = new THREE.PointLight(0xffffff, 0.5)//点光源
    pointLightX.position.set(200, 100, 80)//设置坐标
    const pointLightY = new THREE.PointLight(0xffffff, 0.5)//点光源
    pointLightY.position.set(-200, -100, -80)//设置坐标
    scene.add(mesh, axesHelper, pointLightX, pointLightY)//添加到场景

    //创建相机
    const camera = new THREE.PerspectiveCamera(50, data.width / data.height, 0.1, 2000)
    camera.position.set(200, 200, 200)//相机坐标
    camera.lookAt(0,0,0)//镜头对焦坐标

    //创建渲染器
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(data.width, data.height)//设置画布大小

    //创建控件
    const controls = new OrbitControls(camera, renderer.domElement)

    //创建Stats
    const stats = new Stats()


    //创建时钟
    const clock = new THREE.Clock()
    function render() {//动画
      // const spt = clock.getDelta()*1000
      // console.log('FPS：',1000/spt);//实时帧率
      stats.update()
      mesh.rotateY(0.01)//每次延Y轴移动0.01
      window.requestAnimationFrame(render)//下一次重绘时就执行回调
      renderer.render(scene, camera)//重新渲染页面
    }
    render()
    //画面自适应浏览器宽高
    window.onresize = function () {//窗口变化时触发
      renderer.setSize(window.innerWidth, window.innerHeight)//重新设置画布
      camera.aspect = window.innerWidth / window.innerHeight//重新设置相机宽高比
      camera.updateProjectionMatrix()//更新相机信息
    }

    //绑定到标签
    document.getElementById('my-stats').appendChild(stats.domElement)
    document.getElementById('my-three').appendChild(renderer.domElement)


  },
  more() {
    //创建场景
    const scene = new THREE.Scene()
    //创建Stats
    const stats = new Stats()

    //创建相机
    const camera = new THREE.PerspectiveCamera(50, data.width / data.height, 0.1, 2000)
    camera.position.set(200, 200, 200)//相机坐标
    camera.lookAt(0, 0, 0)//镜头对焦坐标
    //添加网格模型 
    const geometry = new THREE.BoxGeometry(20, 20, 20)//物体
    const material = new THREE.MeshLambertMaterial({ color: 0x00ff00, transparent: true, opacity: 0.5 })//材质
    const meshs = []
    for (let i = 0; i < 10; i++) {
      const mesh = new THREE.Mesh(geometry, material)//网格模型
      mesh.position.set(//随机生成坐标
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200,
        (Math.random() - 0.5) * 200
      )
      scene.add(mesh)
      meshs.push(mesh)
    }
    function render() {//动画
      stats.update()
      for (let i = 0; i < meshs.length; i++) {
        meshs[i].rotateY(0.02)//每次延Y轴移动0.01
      }
      window.requestAnimationFrame(render)//下一次重绘时就执行回调
      renderer.render(scene, camera)//重新渲染页面
    }
    
    const axesHelper = new THREE.AxesHelper(150)//坐标轴
    const pointLightX = new THREE.PointLight(0xffffff, 0.5)//点光源
    pointLightX.position.set(200, 100, 80)//设置坐标
    const pointLightY = new THREE.PointLight(0xffffff, 0.5)//点光源
    pointLightY.position.set(-200, -100, -80)//设置坐标
    scene.add(axesHelper,pointLightX, pointLightY)//添加到场景
    //创建渲染器
    const renderer = new THREE.WebGLRenderer()
    render()
    renderer.setSize(data.width, data.height)//设置画布大小
    renderer.render(scene, camera)//重新渲染页面
    //创建控件
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.addEventListener('change',()=>{
      renderer.render(scene, camera)//重新渲染页面
    })
    //绑定到标签
    document.getElementById('my-stats').appendChild(stats.domElement)
    document.getElementById('my-three').appendChild(renderer.domElement)
  }

})

onMounted(() => {
  // data.init()
  data.more()
})

</script>

<style lang="scss" scoped></style>
