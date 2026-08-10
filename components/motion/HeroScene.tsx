"use client";

import { useEffect, useRef } from "react";
import { colors } from "@/lib/theme";

interface HeroSceneProps {
  /** Tailwind positioning classes (must include sizing/inset utilities). Defaults to filling the parent. */
  className?: string;
}

const MAX_FPS = 30;
const FRAME_INTERVAL = 1000 / MAX_FPS;

function hexToNumber(hex: string): number {
  return parseInt(hex.replace("#", ""), 16);
}

export function HeroScene({ className = "inset-0" }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isSmallViewport = window.innerWidth < 768;

    if (prefersReducedMotion || isSmallViewport) {
      return;
    }

    let cancelled = false;
    let frameId = 0;
    let lastFrameTime = 0;
    let resizeObserver: ResizeObserver | undefined;

    async function init() {
      const {
        Scene,
        PerspectiveCamera,
        WebGLRenderer,
        Group,
        IcosahedronGeometry,
        EdgesGeometry,
        LineBasicMaterial,
        LineSegments,
        MeshBasicMaterial,
        Mesh,
      } = await import("three");
      if (cancelled || !container) return;

      const width = container.clientWidth;
      const height = container.clientHeight;

      const scene = new Scene();
      const camera = new PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.z = 6;

      const renderer = new WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(width, height);
      container.appendChild(renderer.domElement);

      const group = new Group();

      const outerGeometry = new IcosahedronGeometry(1.9, 1);
      const outerEdges = new EdgesGeometry(outerGeometry);
      const outerMaterial = new LineBasicMaterial({
        color: hexToNumber(colors.purpleMid),
        transparent: true,
        opacity: 0.55,
      });
      const outerMesh = new LineSegments(outerEdges, outerMaterial);
      group.add(outerMesh);

      const innerGeometry = new IcosahedronGeometry(0.9, 0);
      const innerMaterial = new MeshBasicMaterial({
        color: hexToNumber(colors.orangeRed),
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      });
      const innerMesh = new Mesh(innerGeometry, innerMaterial);
      group.add(innerMesh);

      scene.add(group);

      const baseRotation = { x: 0.4, y: 0.6 };
      group.rotation.x = baseRotation.x;
      group.rotation.y = baseRotation.y;

      const animate = (time: number) => {
        frameId = requestAnimationFrame(animate);

        const elapsed = time - lastFrameTime;
        if (elapsed < FRAME_INTERVAL) return;
        lastFrameTime = time - (elapsed % FRAME_INTERVAL);

        const scrollOffset = window.scrollY * 0.0006;
        group.rotation.y = baseRotation.y + time * 0.00012 + scrollOffset;
        group.rotation.x = baseRotation.x + time * 0.00006;
        innerMesh.rotation.y -= 0.004;

        renderer.render(scene, camera);
      };

      frameId = requestAnimationFrame(animate);

      resizeObserver = new ResizeObserver(() => {
        if (!container) return;
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        if (newWidth === 0 || newHeight === 0) return;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      });
      resizeObserver.observe(container);

      return () => {
        cancelAnimationFrame(frameId);
        resizeObserver?.disconnect();
        outerGeometry.dispose();
        outerEdges.dispose();
        outerMaterial.dispose();
        innerGeometry.dispose();
        innerMaterial.dispose();
        renderer.dispose();
        if (renderer.domElement.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      };
    }

    let cleanup: (() => void) | undefined;
    init().then((fn) => {
      if (cancelled) {
        fn?.();
      } else {
        cleanup = fn;
      }
    });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={`pointer-events-none absolute hidden md:block ${className}`}
    />
  );
}
