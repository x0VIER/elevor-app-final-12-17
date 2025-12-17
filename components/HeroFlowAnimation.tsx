import React, { useMemo } from 'react';
import { ReactFlow, Background, Node, Edge, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const HeroFlowAnimation: React.FC = () => {
  // Enterprise AI Services Workflow with nicknames
  const nodes: Node[] = useMemo(() => [
    // START NODE
    {
      id: 'start',
      type: 'input',
      data: { label: '▶ PIPELINE START' },
      position: { x: 30, y: 160 },
      sourcePosition: Position.Right,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.35) 0%, rgba(14, 165, 233, 0.25) 100%)',
        color: '#06b6d4',
        border: '3px solid #06b6d4',
        borderRadius: '14px',
        padding: '20px 34px',
        fontWeight: '900',
        fontSize: '15px',
        boxShadow: '0 0 45px rgba(6, 182, 212, 0.85), inset 0 2px 0 rgba(255, 255, 255, 0.35)',
        minWidth: '200px',
        textAlign: 'center',
        letterSpacing: '1.6px',
      }
    },

    // INTAKE SERVICES
    {
      id: 'intake-1',
      type: 'default',
      data: { label: 'DATA COLLECTOR' },
      position: { x: 320, y: 40 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'intake-2',
      type: 'default',
      data: { label: 'VOICE-AI ENGINE' },
      position: { x: 320, y: 150 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'intake-3',
      type: 'default',
      data: { label: 'CHAT LISTENER' },
      position: { x: 320, y: 260 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },

    // PROCESSING SERVICES
    {
      id: 'process-1',
      type: 'default',
      data: { label: 'NLP PROCESSOR' },
      position: { x: 600, y: 20 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'process-2',
      type: 'default',
      data: { label: 'SENTIMENT SCAN' },
      position: { x: 600, y: 130 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'process-3',
      type: 'default',
      data: { label: 'INTENT MAPPER' },
      position: { x: 600, y: 240 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },

    // ROUTE NODE 1 (Communication Hub)
    {
      id: 'route-1',
      type: 'default',
      data: { label: '◆ SMART ROUTER' },
      position: { x: 880, y: 90 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'animated-route-node',
      style: {
        background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.25) 0%, rgba(203, 213, 225, 0.15) 100%)',
        color: '#e2e8f0',
        border: '3.5px solid #94a3b8',
        borderRadius: '12px',
        padding: '18px 28px',
        fontWeight: '900',
        fontSize: '14px',
        boxShadow: '0 0 40px rgba(148, 163, 184, 0.6), 0 0 20px rgba(255, 255, 255, 0.3), inset 0 2.5px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '1.2px',
      }
    },

    // INTELLIGENCE SERVICES
    {
      id: 'intel-1',
      type: 'default',
      data: { label: 'ML PREDICTOR' },
      position: { x: 1160, y: 10 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'intel-2',
      type: 'default',
      data: { label: 'CONTEXT ENGINE' },
      position: { x: 1160, y: 120 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'intel-3',
      type: 'default',
      data: { label: 'RISK ANALYZER' },
      position: { x: 1160, y: 230 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },

    // ROUTE NODE 2 (Decision Hub)
    {
      id: 'route-2',
      type: 'default',
      data: { label: '◆ PRIORITY-Q' },
      position: { x: 1440, y: 120 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'animated-route-node',
      style: {
        background: 'linear-gradient(135deg, rgba(148, 163, 184, 0.25) 0%, rgba(203, 213, 225, 0.15) 100%)',
        color: '#e2e8f0',
        border: '3.5px solid #94a3b8',
        borderRadius: '12px',
        padding: '18px 28px',
        fontWeight: '900',
        fontSize: '14px',
        boxShadow: '0 0 40px rgba(148, 163, 184, 0.6), 0 0 20px rgba(255, 255, 255, 0.3), inset 0 2.5px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 0 rgba(0, 0, 0, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '1.2px',
      }
    },

    // ACTION SERVICES
    {
      id: 'action-1',
      type: 'default',
      data: { label: 'AUTO-RESPONDER' },
      position: { x: 1720, y: 30 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'action-2',
      type: 'default',
      data: { label: 'AGENT HANDOFF' },
      position: { x: 1720, y: 140 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'action-3',
      type: 'default',
      data: { label: 'TASK EXECUTOR' },
      position: { x: 1720, y: 250 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },

    // OUTPUT SERVICES
    {
      id: 'output-1',
      type: 'default',
      data: { label: 'CRM-SYNC' },
      position: { x: 2000, y: 85 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },
    {
      id: 'output-2',
      type: 'default',
      data: { label: 'ANALYTICS HUB' },
      position: { x: 2000, y: 195 },
      sourcePosition: Position.Right,
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.94) 0%, rgba(30, 41, 59, 0.9) 100%)',
        color: '#e2e8f0',
        border: '3px solid #3b82f6',
        borderRadius: '13px',
        padding: '18px 28px',
        fontWeight: '700',
        fontSize: '13px',
        boxShadow: '0 0 32px rgba(59, 130, 246, 0.55), inset 0 2px 0 rgba(255, 255, 255, 0.2)',
        minWidth: '190px',
        textAlign: 'center',
        letterSpacing: '0.8px'
      }
    },

    // FINISH NODE
    {
      id: 'finish',
      type: 'output',
      data: { label: '■ COMPLETE' },
      position: { x: 2280, y: 140 },
      targetPosition: Position.Left,
      className: 'static-node',
      style: {
        background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.35) 0%, rgba(22, 163, 74, 0.25) 100%)',
        color: '#22c55e',
        border: '3px solid #22c55e',
        borderRadius: '14px',
        padding: '20px 34px',
        fontWeight: '900',
        fontSize: '15px',
        boxShadow: '0 0 45px rgba(34, 197, 94, 0.85), inset 0 2px 0 rgba(255, 255, 255, 0.35)',
        minWidth: '200px',
        textAlign: 'center',
        letterSpacing: '1.6px',
      }
    },
  ], []);

  // Complete workflow connections - ALL nodes connected
  const edges: Edge[] = useMemo(() => [
    // START to Intake Services
    { id: 'e-s-i1', source: 'start', target: 'intake-1', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3.5, filter: 'drop-shadow(0 0 12px #06b6d4)' } },
    { id: 'e-s-i2', source: 'start', target: 'intake-2', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3.5, filter: 'drop-shadow(0 0 12px #06b6d4)' } },
    { id: 'e-s-i3', source: 'start', target: 'intake-3', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3.5, filter: 'drop-shadow(0 0 12px #06b6d4)' } },
    
    // Intake to Processing Services
    { id: 'e-i1-p1', source: 'intake-1', target: 'process-1', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-i2-p2', source: 'intake-2', target: 'process-2', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-i3-p3', source: 'intake-3', target: 'process-3', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-i1-p2', source: 'intake-1', target: 'process-2', animated: true, style: { stroke: '#ffffff', strokeWidth: 2.5, filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.7))' } },
    
    // Processing to SMART ROUTER
    { id: 'e-p1-r1', source: 'process-1', target: 'route-1', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    { id: 'e-p2-r1', source: 'process-2', target: 'route-1', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    { id: 'e-p3-r1', source: 'process-3', target: 'route-1', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    
    // SMART ROUTER to Intelligence Services
    { id: 'e-r1-in1', source: 'route-1', target: 'intel-1', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    { id: 'e-r1-in2', source: 'route-1', target: 'intel-2', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    { id: 'e-r1-in3', source: 'route-1', target: 'intel-3', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    
    // Intelligence to PRIORITY-Q
    { id: 'e-in1-r2', source: 'intel-1', target: 'route-2', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    { id: 'e-in2-r2', source: 'intel-2', target: 'route-2', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    { id: 'e-in3-r2', source: 'intel-3', target: 'route-2', animated: true, style: { stroke: '#a855f7', strokeWidth: 3.5, filter: 'drop-shadow(0 0 13px #a855f7)' } },
    
    // PRIORITY-Q to Action Services
    { id: 'e-r2-a1', source: 'route-2', target: 'action-1', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    { id: 'e-r2-a2', source: 'route-2', target: 'action-2', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    { id: 'e-r2-a3', source: 'route-2', target: 'action-3', animated: true, style: { stroke: '#06b6d4', strokeWidth: 3, filter: 'drop-shadow(0 0 10px #06b6d4)' } },
    
    // Action Services to Output Services
    { id: 'e-a1-o1', source: 'action-1', target: 'output-1', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-a2-o1', source: 'action-2', target: 'output-1', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-a2-o2', source: 'action-2', target: 'output-2', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    { id: 'e-a3-o2', source: 'action-3', target: 'output-2', animated: true, style: { stroke: '#ffffff', strokeWidth: 3, filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.9))' } },
    
    // Output Services to FINISH
    { id: 'e-o1-f', source: 'output-1', target: 'finish', animated: true, style: { stroke: '#22c55e', strokeWidth: 3.5, filter: 'drop-shadow(0 0 12px #22c55e)' } },
    { id: 'e-o2-f', source: 'output-2', target: 'finish', animated: true, style: { stroke: '#22c55e', strokeWidth: 3.5, filter: 'drop-shadow(0 0 12px #22c55e)' } },
  ], []);

  return (
    <div className="w-full h-full relative flex items-center justify-center bg-transparent overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: 'linear-gradient(#1e293b 1.8px, transparent 1.8px), linear-gradient(90deg, #1e293b 1.8px, transparent 1.8px)', 
               backgroundSize: '65px 65px' 
             }}>
        </div>
      </div>

      {/* Animation styles - ONLY for ROUTE nodes */}
      <style>{`
        /* Shiny text effect for ALL nodes */
        .react-flow__node {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4), 0 0 8px rgba(255, 255, 255, 0.3);
        }
        
        /* Static nodes - no animation */
        .static-node {
          transition: opacity 0.2s ease;
        }
        
        /* Only ROUTE nodes pulse (chrome communication hubs) */
        .animated-route-node {
          animation: chromePulse 3.2s ease-in-out infinite;
        }
        
        @keyframes chromePulse {
          0%, 100% { 
            transform: scale(1);
            filter: brightness(1) drop-shadow(0 0 35px rgba(148, 163, 184, 0.7));
          }
          50% { 
            transform: scale(1.06);
            filter: brightness(1.25) drop-shadow(0 0 45px rgba(203, 213, 225, 0.9));
          }
        }
        
        /* Animated edge glow */
        .react-flow__edge-path {
          stroke-dasharray: 6;
          animation: edgeFlow 1.8s linear infinite;
        }
        
        @keyframes edgeFlow {
          to {
            stroke-dashoffset: -12;
          }
        }
      `}</style>

      <div className="w-full h-full relative z-10">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          fitView={true}
          fitViewOptions={{
            padding: 0.1,
            minZoom: 0.48,
            maxZoom: 0.68
          }}
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
          nodesDraggable={false}
          nodesConnectable={false}
          elementsSelectable={false}
          zoomOnScroll={false}
          panOnDrag={false}
          zoomOnDoubleClick={false}
          panOnScroll={false}
          preventScrolling={true}
        >
          <Background 
            color="#0f172a" 
            gap={55} 
            size={1.8}
            style={{ opacity: 0.12 }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default HeroFlowAnimation;