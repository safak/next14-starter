'use client'
import React, { useEffect, useRef } from 'react'

const EnterpriseThreeJSBackground = () => {
  const mountRef = useRef(null)
  const rendererRef = useRef(null)
  const animationIdRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => initThreeJS()
    document.head.appendChild(script)

    const handleMouseMove = (e) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current)
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
      window.removeEventListener('mousemove', handleMouseMove)
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initThreeJS = () => {
    if (!window.THREE || !mountRef.current) return

    const {
      Scene,
      PerspectiveCamera,
      WebGLRenderer,
      IcosahedronGeometry,
      CylinderGeometry,
      TorusGeometry,
      MeshStandardMaterial,
      MeshPhysicalMaterial,
      Mesh,
      PointLight,
      DirectionalLight,
      AmbientLight,
      Color,
      Fog,
      Vector3,
      Group,
      RingGeometry,
      PlaneGeometry,
      BufferGeometry,
      BufferAttribute,
      Points,
      PointsMaterial,
      AdditiveBlending
    } = window.THREE

    // Professional scene setup
    const scene = new Scene()
    scene.background = new Color(0x0d0d0d)
    scene.fog = new Fog(0x0d0d0d, 20, 100)

    // Cinematic camera
    const camera = new PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 8, 25)

    // Enterprise-grade renderer
    const renderer = new WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = window.THREE.PCFSoftShadowMap
    renderer.toneMappingExposure = 1.2
    mountRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Sophisticated lighting system
    const ambientLight = new AmbientLight(0x404040, 0.2)
    scene.add(ambientLight)

    const mainLight = new DirectionalLight(0xffffff, 1.0)
    mainLight.position.set(10, 20, 10)
    mainLight.castShadow = true
    mainLight.shadow.mapSize.width = 2048
    mainLight.shadow.mapSize.height = 2048
    scene.add(mainLight)

    const accentLight1 = new PointLight(0x4a9eff, 0.8, 50)
    accentLight1.position.set(-15, 10, -15)
    scene.add(accentLight1)

    const accentLight2 = new PointLight(0xff6b6b, 0.6, 40)
    accentLight2.position.set(15, 5, 15)
    scene.add(accentLight2)

    // Create floating neural network visualization
    const createNeuralNetwork = () => {
      const networkGroup = new Group()
      const nodes = []
      const connections = []

      // Create nodes
      for (let i = 0; i < 12; i++) {
        const nodeGeometry = new IcosahedronGeometry(0.2, 1)
        const nodeMaterial = new MeshPhysicalMaterial({
          color: 0x4a9eff,
          metalness: 0.8,
          roughness: 0.1,
          clearcoat: 1.0,
          clearcoatRoughness: 0.1,
          transparent: true,
          opacity: 0.9
        })
        
        const node = new Mesh(nodeGeometry, nodeMaterial)
        node.position.set(
          (Math.random() - 0.5) * 40,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 30
        )
        node.castShadow = true
        node.receiveShadow = true
        
        nodes.push(node)
        networkGroup.add(node)
      }

      // Create connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const distance = nodes[i].position.distanceTo(nodes[j].position)
          if (distance < 15 && Math.random() > 0.7) {
            const points = [nodes[i].position, nodes[j].position]
            const geometry = new BufferGeometry().setFromPoints(points)
            const material = new window.THREE.LineBasicMaterial({
              color: 0x4a9eff,
              transparent: true,
              opacity: 0.3
            })
            const line = new window.THREE.Line(geometry, material)
            connections.push(line)
            networkGroup.add(line)
          }
        }
      }

      networkGroup.userData = { nodes, connections }
      return networkGroup
    }

    // Create floating geometric elements
    const createGeometricElements = () => {
      const elements = []

      // Sophisticated torus rings
      for (let i = 0; i < 4; i++) {
        const geometry = new TorusGeometry(2 + i * 0.5, 0.1, 8, 20)
        const material = new MeshPhysicalMaterial({
          color: new Color().setHSL(0.6 + i * 0.05, 0.8, 0.5),
          metalness: 0.9,
          roughness: 0.1,
          clearcoat: 1.0,
          transparent: true,
          opacity: 0.7
        })
        
        const torus = new Mesh(geometry, material)
        torus.position.set(
          (Math.random() - 0.5) * 30,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 20
        )
        torus.castShadow = true
        torus.receiveShadow = true
        
        torus.userData = {
          originalPosition: torus.position.clone(),
          rotationSpeed: Math.random() * 0.01 + 0.005,
          floatSpeed: Math.random() * 0.02 + 0.01,
          floatOffset: Math.random() * Math.PI * 2
        }
        
        elements.push(torus)
        scene.add(torus)
      }

      // Minimalist cylinders
      for (let i = 0; i < 3; i++) {
        const geometry = new CylinderGeometry(0.1, 0.1, 4, 8)
        const material = new MeshStandardMaterial({
          color: 0x333333,
          metalness: 0.8,
          roughness: 0.2,
          transparent: true,
          opacity: 0.8
        })
        
        const cylinder = new Mesh(geometry, material)
        cylinder.position.set(
          (Math.random() - 0.5) * 35,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 25
        )
        cylinder.castShadow = true
        
        cylinder.userData = {
          originalPosition: cylinder.position.clone(),
          rotationSpeed: Math.random() * 0.008 + 0.003,
          floatSpeed: Math.random() * 0.015 + 0.008,
          floatOffset: Math.random() * Math.PI * 2
        }
        
        elements.push(cylinder)
        scene.add(cylinder)
      }

      return elements
    }

    // Create particle field
    const createParticleField = () => {
      const particleCount = 200
      const geometry = new BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      const colors = new Float32Array(particleCount * 3)
      const sizes = new Float32Array(particleCount)

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3
        
        positions[i3] = (Math.random() - 0.5) * 100
        positions[i3 + 1] = (Math.random() - 0.5) * 60
        positions[i3 + 2] = (Math.random() - 0.5) * 80
        
        const color = new Color()
        color.setHSL(0.6 + Math.random() * 0.2, 0.7, 0.5)
        colors[i3] = color.r
        colors[i3 + 1] = color.g
        colors[i3 + 2] = color.b
        
        sizes[i] = Math.random() * 2 + 1
      }

      geometry.setAttribute('position', new BufferAttribute(positions, 3))
      geometry.setAttribute('color', new BufferAttribute(colors, 3))
      geometry.setAttribute('size', new BufferAttribute(sizes, 1))

      const material = new PointsMaterial({
        size: 0.5,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: AdditiveBlending
      })

      return new Points(geometry, material)
    }

    // Create sophisticated ground plane
    const createGroundPlane = () => {
      const geometry = new PlaneGeometry(100, 100, 50, 50)
      const material = new MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.2,
        roughness: 0.8,
        transparent: true,
        opacity: 0.5
      })
      
      const plane = new Mesh(geometry, material)
      plane.rotation.x = -Math.PI / 2
      plane.position.y = -10
      plane.receiveShadow = true
      
      return plane
    }

    // Initialize scene elements
    const neuralNetwork = createNeuralNetwork()
    const geometricElements = createGeometricElements()
    const particles = createParticleField()
    const groundPlane = createGroundPlane()

    scene.add(neuralNetwork)
    scene.add(particles)
    scene.add(groundPlane)

    // Professional animation loop
    let time = 0
    const animate = () => {
      time += 0.008

      // Animate neural network
      const { nodes, connections } = neuralNetwork.userData
      nodes.forEach((node, index) => {
        node.position.y += Math.sin(time * 2 + index) * 0.02
        node.rotation.x += 0.008
        node.rotation.y += 0.005
        
        // Subtle pulsing effect
        const scale = 1 + Math.sin(time * 3 + index) * 0.1
        node.scale.setScalar(scale)
      })

      // Animate geometric elements
      geometricElements.forEach((element, index) => {
        const userData = element.userData
        
        element.position.y = userData.originalPosition.y + 
          Math.sin(time * userData.floatSpeed + userData.floatOffset) * 2
        element.position.x = userData.originalPosition.x + 
          Math.cos(time * userData.floatSpeed * 0.7 + userData.floatOffset) * 1
        
        element.rotation.x += userData.rotationSpeed
        element.rotation.y += userData.rotationSpeed * 0.8
        element.rotation.z += userData.rotationSpeed * 0.6
      })

      // Animate particles
      const positions = particles.geometry.attributes.position.array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(time + i) * 0.01
        positions[i] += Math.cos(time * 0.5 + i) * 0.005
      }
      particles.geometry.attributes.position.needsUpdate = true

      // Sophisticated camera movement with mouse interaction
      const targetX = mouseRef.current.x * 3
      const targetY = mouseRef.current.y * 2
      
      camera.position.x += (targetX - camera.position.x) * 0.02
      camera.position.y += (8 + targetY - camera.position.y) * 0.02
      camera.position.z = 25 + Math.sin(time * 0.5) * 2
      
      camera.lookAt(0, 0, 0)

      // Animate lighting
      accentLight1.position.x = Math.sin(time * 0.7) * 20
      accentLight1.position.z = Math.cos(time * 0.7) * 20
      accentLight1.intensity = 0.6 + Math.sin(time * 2) * 0.2

      accentLight2.position.y = 5 + Math.sin(time * 0.5) * 3
      accentLight2.position.z = Math.cos(time * 0.8) * 15
      accentLight2.intensity = 0.4 + Math.cos(time * 1.5) * 0.2

      renderer.render(scene, camera)
      animationIdRef.current = requestAnimationFrame(animate)
    }

    animate()

    // Responsive handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', handleResize)
  }

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-0"
      style={{
        background: 'linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #0d0d0d 100%)',
        overflow: 'hidden'
      }}
    />
  )
}

export default EnterpriseThreeJSBackground