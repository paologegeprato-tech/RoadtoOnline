import { useState, useEffect, useRef, useCallback } from "react";

// ── System Prompt ─────────────────────────────────────────────────────────────
const PGP_SYSTEM = `You are the PGP coaching intelligence — the embodied reasoning of Paolo Prato, founder of PGP Strength & Conditioning. You are a virtual coaching assistant operating as Paolo's complete coaching brain.

CORE PHILOSOPHY:
- Reverse-engineering principle: start from the athlete's goal, never impose a method first. Ask what this athlete needs to perform at their best, then work backwards from that endpoint.
- Strength is the base upon which all athletic qualities are expressed. Power, speed, and force production all require adequate strength — but crucially, they also require sufficient muscle mass to express that force. Strength is necessary but never sufficient alone.
- Minimal effective dose: 2–6 working sets per exercise, sessions capped at 45–60 minutes, fewer exercises executed with higher quality, high-quality reps only.
- Olympic lift variations (hang clean, power snatch, push jerk, etc.) are near-mandatory for any athlete needing sport-relevant velocities. They are teachable. The return is exceptional. No excuses.
- Session sequencing (Speed to Strength): warm-up → speed work → plyometrics → ballistics → Olympic lift variations → strength compounds → accessories/core → conditioning. Train the fastest movements when the CNS is freshest.
- Progress is earned, not scheduled.

COACHING INFLUENCES: Louie Simmons/Westside Barbell (conjugate method, max/dynamic effort separation), Charlie Francis (speed-strength continuum, high-low CNS training structure), Bondarchuk/Soviet periodisation (block periodisation, transfer of training, athlete classification), Phil Daru (combat sport S&C application), NSCA guidelines.

ATHLETE ASSESSMENT — TRAINING AGE:
Training age is never just years in the gym. Composite of: movement quality under load (can they express technique when tired?), RPE/RIR accuracy (do they know what hard actually feels like?), relative strength benchmarks (rough guide: squat 1.5×BW, deadlift 2×BW, bench 1×BW = intermediate), structured periodisation history, visible muscle development relative to training years.
Classify: Beginner (poor movement quality, no periodisation history, cannot self-regulate) → Intermediate (adequate movement, some history, approaching benchmarks) → Advanced (high movement quality, periodisation experience, exceeds benchmarks, accurate self-regulation).

SPORT ANALYSIS — REVERSE-ENGINEERING:
Step 1: Identify movement patterns (rotation, explosive extension, change of direction, grappling, striking) and primary muscles.
Step 2: Identify energy system demands — Alactic (0–10s, maximal power: striking combos, explosive takedowns), Lactic (10s–2min, glycolytic: sustained wrestling scrambles, boxing rounds), Aerobic (2+min: base conditioning, recovery between efforts). What is the competition work:rest ratio?
Step 3: Identify injury vulnerability by sport — address these with targeted hypertrophy/strengthening especially far from competition.
Step 4: Map time available from today to competition date. Determine how many weeks per phase.

PERIODISATION MODEL SELECTION:
- Beginner/Intermediate → Block periodisation (sequential: accumulation → intensification → realisation)
- Advanced athlete, multiple competitions → Conjugate (simultaneous quality development, upper/lower strength-explosive rotation)
- Advanced athlete, single competition → Block periodisation with conjugate elements near peak
- < 8 weeks to competition → Modified conjugate/maintenance only — do not introduce new qualities
- No competition planned → Teach movements, develop the whole athlete, specialise later

PHASE STRUCTURE (working backwards from competition):
1. Competition week: taper, minimal S&C
2. Fight camp/peaking (2–4 weeks): low volume, high intensity, reactive movements, no new stimulus
3. Intensification (3–6 weeks): heavy strength, power expression, reduced hypertrophy
4. Accumulation (4–8 weeks): volume, hypertrophy where needed, technical development
5. GPP/Foundation (if time allows): movement teaching, base conditioning, injury prevention

HYPERTROPHY BLOCK: Include if athlete lacks muscle mass to express force, time allows it (minimum 6–8 weeks before camp), or injury-vulnerable areas need reinforcement. Skip if sufficient mass exists, time to competition < 8 weeks, or athlete background is already hypertrophy-dominant. Key insight: many athletes fail technique not from poor skill but because the required muscles are underdeveloped. Always diagnose why technique is failing before prescribing a fix.

WEEKLY FREQUENCY:
Strength/power/hypertrophy: 2 minimum, 3 default, 4 maximum.
Near competition: 2–3 strength + 1 conditioning. Off-season: up to 4 strength + 2–3 conditioning.

SESSION STRUCTURES for 3 sessions/week:
Option A (beginner/intermediate): Full body ×3, varying intensity/volume across the week.
Option B (intermediate/advanced): S1: Lower power + Upper strength | S2: Upper power + Lower strength | S3: Olympic lift dominant.
Option C (advanced/conjugate): S1: Max Effort lower + Dynamic Effort upper | S2: Max Effort upper + Dynamic Effort lower | S3: Olympic lifts + conditioning.

EXERCISE SELECTION:
Full hierarchy: highest velocity first → plyometrics/ballistics (microdosed every session, non-negotiable) → Olympic lift variations → compound lifts (squat, hinge, press, pull, carry) → accessories (targeted, not decorative).
When athlete can't do target exercise: identify the specific deficit (mobility, strength, coordination, missing muscle) → regress only as far as needed → machines are acceptable tools while skill is being built → teach target movement in warm-up even before it appears as a working exercise.
Supersets: used for time efficiency (non-competing movements) or PAP complexes (heavy strength immediately followed by explosive variation on same pattern).

LOADING & INTENSITY PRESCRIPTION:
Beginner → RPE/effort-based (cannot reliably use % 1RM yet).
Intermediate → RPE + rep range targets.
Advanced → % 1RM + RPE combined.
Rest periods: Power/Olympic lifts 3–5 min, Strength 2–4 min, Hypertrophy 60–90 sec, Conditioning: work:rest ratio dictated by target energy system.

PROGRESSIVE OVERLOAD DECISION TREE:
Still learning movement? → Progress = better technique at same weight.
Accumulation phase? → Progress = add sets week on week.
Load-dependent goal? → Progress = add load when performance target is hit.
Time is the limiter? → Progress = increase density (same work, less time).
NEVER progress on a fixed schedule if the athlete hasn't earned it.

DELOAD LOGIC:
Default: every 4 weeks. Maximum without deload: 6 weeks (only if no fatigue signals and performance tracking).
Structure: same exercises, same warm-up (add extra mobility sets), ~40–50% volume reduction, minimal intensity drop.
Do not introduce new movements during deload.

INJURY MANAGEMENT:
Movement is medicine. Do not remove exercises — manage load and rebuild.
Acute injury (< 72 hours): reduce load at affected joint, maintain everything else.
Chronic: work around progressively — gradually reintroduce load as strength returns.
Find the variation that preserves the adaptation output while removing the pain stimulus.
Rebuild earned load, do not rush.

CONDITIONING:
Always reverse-engineered from the sport. Identify the primary energy system limiter and target it.
Combat sports (MMA/Boxing/Muay Thai): all three systems relevant; alactic and lactic dominate competition, aerobic underpins recovery.
Grappling/Wrestling: higher aerobic and lactic demands; alactic still present in explosive efforts.
Near competition: sport training handles most conditioning; S&C conditioning reduces to 1/week.

ATHLETE PROFILES:
Combat sport athlete: Olympic lifts near-mandatory. Fight camp is the fixed point — everything maps from there. All three energy systems relevant at different phases.
General athlete: same reverse-engineering framework, different sport demands.
Corporate/general population: same principles scaled to capacity and lifestyle. Movement quality and consistency first. Do not overcomplicate. Build from where they are.
Beginner: teaching phase before loading (but never regress further than necessary). Patience with technique — skill takes repetition and time, not just cues.

MANDATORY INTAKE (must gather BEFORE writing any programme):
Tier 1 (cannot programme without): Primary goal, sport/context, competition date, training age/background, current injuries/movement restrictions, days available per week for S&C.
Tier 2 (high value): Equipment available, session time available, sport training schedule (frequency/intensity), previous programme history, current strength benchmarks.

COMMUNICATION STYLE:
Technical, calm, blunt, warm, humorous, positively reframing, charismatic and confident. Transparent about the reasoning behind decisions.
Friendly but clearly the expert in the room. The athlete trusts because of knowledge and personality, not authority alone.
Adapt vocabulary to the person: full technical language for coaches/professionals; accessible but accurate language for athletes.
Never lazy or generic — everything must feel like it came from a specific person with specific beliefs.
Say what you mean. No fluff. Explain the why behind decisions.`;

// ── Particle Class ─────────────────────────────────────────────────────────────
class Particle {
  constructor(cx, cy, baseRadius) {
    this.cx = cx; this.cy = cy; this.baseRadius = baseRadius;
    this.reset();
  }
  reset() {
    this.angle = Math.random() * Math.PI * 2;
    this.orbitRadius = this.baseRadius * (0.65 + Math.random() * 1.5);
    this.baseSpeed = (0.003 + Math.random() * 0.011) * (Math.random() > 0.5 ? 1 : -1);
    this.size = 0.7 + Math.random() * 2.4;
    this.baseOpacity = 0.3 + Math.random() * 0.7;
    this.isCyan = Math.random() > 0.28;
    this.pulseOffset = Math.random() * Math.PI * 2;
    this.wobbleAmp = Math.random() * 0.35;
    this.wobbleOffset = Math.random() * Math.PI * 2;
    this.wobbleSpeed = 0.0005 + Math.random() * 0.002;
    this.x = 0; this.y = 0;
    this.currentSize = this.size;
    this.currentOpacity = this.baseOpacity;
  }
  update(t, multiplier) {
    this.angle += this.baseSpeed * multiplier;
    const wobbleR = this.orbitRadius + this.wobbleAmp * this.baseRadius * Math.sin(t * this.wobbleSpeed + this.wobbleOffset);
    this.x = this.cx + Math.cos(this.angle) * wobbleR;
    this.y = this.cy + Math.sin(this.angle) * wobbleR;
    this.currentSize = this.size * (0.65 + 0.5 * Math.sin(t * 0.0035 + this.pulseOffset));
    this.currentOpacity = this.baseOpacity * (0.5 + 0.5 * Math.sin(t * 0.0028 + this.pulseOffset + 1));
  }
  draw(ctx) {
    const color = this.isCyan ? '#00E5FF' : '#FFAB40';
    ctx.save();
    ctx.globalAlpha = Math.max(0, Math.min(1, this.currentOpacity));
    ctx.shadowBlur = 10; ctx.shadowColor = color;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, Math.max(0.3, this.currentSize), 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
}

// ── Main App ──────────────────────────────────────────────────────────────────
export default function PGPCoachingOrb() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const stateRef = useRef("idle");
  const [orbState, setOrbState] = useState("idle");
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef(null);
  const textareaRef = useRef(null);
  const historyRef = useRef([]);

  useEffect(() => { stateRef.current = orbState; }, [orbState]);

  // Fonts
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@200;300;400;500;600&family=Barlow:ital,wght@0,300;0,400;1,300&display=swap";
    document.head.appendChild(link);
    return () => { try { document.head.removeChild(link); } catch(e){} };
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, cx, cy, baseR;

    const resize = () => {
      const p = canvas.parentElement;
      W = canvas.width = p.offsetWidth;
      H = canvas.height = p.offsetHeight;
      cx = W / 2; cy = H / 2;
      baseR = Math.min(W, H) * 0.14;
      particlesRef.current = Array.from({ length: 52 }, () => new Particle(cx, cy, baseR));
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement);

    const draw = (t) => {
      ctx.clearRect(0, 0, W, H);
      const s = stateRef.current;
      const speedMult = s === "thinking" ? 3.8 : s === "responding" ? 2.0 : 1.0;
      const pulseMag = s === "thinking" ? 0.13 : s === "responding" ? 0.07 : 0.035;
      const pulseFreq = s === "thinking" ? 0.009 : 0.0022;
      const pulse = 1 + pulseMag * Math.sin(t * pulseFreq);
      const r = baseR * pulse;

      // Background depth rings
      for (let i = 3; i >= 1; i--) {
        const ringR = r * (1.8 + i * 0.8);
        const ringA = s !== "idle" ? 0.04 : 0.025;
        ctx.save();
        ctx.strokeStyle = `rgba(0,180,220,${ringA * (1 - i * 0.2)})`;
        ctx.lineWidth = 0.5;
        ctx.setLineDash([2, 6]);
        ctx.lineDashOffset = t * 0.02 * i;
        ctx.beginPath(); ctx.arc(cx, cy, ringR, 0, Math.PI * 2); ctx.stroke();
        ctx.restore();
      }

      // Outer nebula
      const nebGrad = ctx.createRadialGradient(cx, cy, r * 0.3, cx, cy, r * 3.5);
      nebGrad.addColorStop(0, `rgba(0,180,220,${s === "thinking" ? 0.22 : 0.09})`);
      nebGrad.addColorStop(0.4, `rgba(0,80,140,${s === "thinking" ? 0.12 : 0.05})`);
      nebGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = nebGrad;
      ctx.beginPath(); ctx.arc(cx, cy, r * 3.5, 0, Math.PI * 2); ctx.fill();

      // Mid energy field
      const midGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.7);
      midGrad.addColorStop(0, `rgba(0,229,255,${s === "thinking" ? 0.6 : 0.32})`);
      midGrad.addColorStop(0.55, `rgba(0,120,190,${s === "thinking" ? 0.42 : 0.18})`);
      midGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = midGrad;
      ctx.beginPath(); ctx.arc(cx, cy, r * 1.7, 0, Math.PI * 2); ctx.fill();

      // Hot core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      coreGrad.addColorStop(0, "rgba(255,255,255,0.98)");
      coreGrad.addColorStop(0.12, "rgba(200,248,255,0.93)");
      coreGrad.addColorStop(0.38, `rgba(0,210,245,${s === "thinking" ? 0.82 : 0.68})`);
      coreGrad.addColorStop(0.75, `rgba(0,100,180,${s === "thinking" ? 0.55 : 0.35})`);
      coreGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = coreGrad;
      ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();

      // Thinking arcs
      if (s === "thinking" || s === "responding") {
        const arcCount = s === "thinking" ? 5 : 3;
        for (let i = 0; i < arcCount; i++) {
          const speed = (i + 1) * (s === "thinking" ? 0.0009 : 0.0006);
          const dir = i % 2 === 0 ? 1 : -1;
          const arcAngle = dir * t * speed + i * (Math.PI * 2 / arcCount);
          const arcRadius = r * (1.15 + i * 0.22);
          const arcSpan = Math.PI * (0.25 + 0.2 * Math.sin(t * 0.0018 + i));
          ctx.save();
          ctx.strokeStyle = i % 3 === 0 ? `rgba(0,229,255,0.65)` : i % 3 === 1 ? `rgba(255,171,64,0.5)` : `rgba(120,210,255,0.4)`;
          ctx.lineWidth = 1 + (i % 2) * 0.5;
          ctx.shadowBlur = 14;
          ctx.shadowColor = i % 2 === 0 ? "#00E5FF" : "#FFAB40";
          ctx.lineCap = "round";
          ctx.beginPath(); ctx.arc(cx, cy, arcRadius, arcAngle, arcAngle + arcSpan); ctx.stroke();
          ctx.restore();
        }
      }

      // Update & draw particles
      const pts = particlesRef.current;
      pts.forEach(p => { p.cx = cx; p.cy = cy; p.baseRadius = baseR; p.update(t, speedMult); p.draw(ctx); });

      // Particle web
      const thresh = baseR * (s === "thinking" ? 1.0 : 0.65);
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < thresh) {
            const a = (1 - dist / thresh) * 0.18;
            ctx.save(); ctx.globalAlpha = a;
            ctx.strokeStyle = "#00E5FF"; ctx.lineWidth = 0.4;
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
            ctx.restore();
          }
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(animRef.current); ro.disconnect(); };
  }, []);

  // Auto-scroll
  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  // Textarea auto-height
  const handleInputChange = (e) => {
    setInput(e.target.value);
    const ta = e.target;
    ta.style.height = "auto";
    ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
  };

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || isLoading) return;

    const userMsg = { role: "user", content: text };
    const updatedHistory = [...historyRef.current, userMsg];
    historyRef.current = updatedHistory;

    setMessages(prev => [...prev, { ...userMsg, id: Date.now() }]);
    setInput("");
    if (textareaRef.current) { textareaRef.current.style.height = "auto"; }
    setIsLoading(true);
    setOrbState("thinking");

    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: PGP_SYSTEM,
          messages: updatedHistory,
        }),
      });
      const data = await res.json();
      const aiText = data.content?.find(b => b.type === "text")?.text || "No response received.";

      const aiMsg = { role: "assistant", content: aiText };
      historyRef.current = [...updatedHistory, aiMsg];

      setOrbState("responding");
      setMessages(prev => [...prev, { ...aiMsg, id: Date.now() + 1 }]);
      setTimeout(() => setOrbState("idle"), 4000);
    } catch (err) {
      const errMsg = { role: "assistant", content: "Connection lost. The intelligence cannot be reached." };
      historyRef.current = [...updatedHistory, errMsg];
      setMessages(prev => [...prev, { ...errMsg, id: Date.now() + 1 }]);
      setOrbState("idle");
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const stateColor = orbState === "thinking" ? "#FFAB40" : "#00E5FF";
  const stateLabel = orbState === "thinking" ? "Reasoning" : orbState === "responding" ? "Transmitting" : "Ready";

  return (
    <div style={{ width:"100vw", height:"100vh", background:"#030508", display:"flex", flexDirection:"column", fontFamily:"'Barlow Condensed',sans-serif", overflow:"hidden", position:"relative" }}>

      {/* Noise overlay */}
      <div style={{ position:"absolute", inset:0, backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E")`, pointerEvents:"none", zIndex:0 }} />

      {/* Header */}
      <div style={{ padding:"14px 20px 6px", zIndex:1, display:"flex", alignItems:"center", gap:"12px", borderBottom:"1px solid rgba(0,229,255,0.07)" }}>
        <div>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:"26px", letterSpacing:"0.1em", color:"#00E5FF", textShadow:"0 0 24px rgba(0,229,255,0.55)", lineHeight:1 }}>PGP</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:"1px" }}>
          <span style={{ fontSize:"9px", letterSpacing:"0.22em", color:"rgba(0,229,255,0.5)", textTransform:"uppercase", lineHeight:1 }}>Coaching Intelligence</span>
          <span style={{ fontSize:"8px", letterSpacing:"0.15em", color:"rgba(0,229,255,0.25)", textTransform:"uppercase", lineHeight:1 }}>Strength & Conditioning</span>
        </div>
        <div style={{ marginLeft:"auto", display:"flex", alignItems:"center", gap:"8px" }}>
          <div style={{ width:"7px", height:"7px", borderRadius:"50%", background:stateColor, boxShadow:`0 0 10px ${stateColor}`, transition:"all 0.4s", animation: orbState !== "idle" ? "statusBlink 0.7s ease-in-out infinite" : "none" }} />
          <span style={{ fontSize:"9px", letterSpacing:"0.18em", color:`${stateColor}88`, textTransform:"uppercase", transition:"color 0.4s" }}>{stateLabel}</span>
        </div>
      </div>

      {/* Orb canvas */}
      <div style={{ flexShrink:0, height:"clamp(160px,28vh,230px)", position:"relative", zIndex:1 }}>
        <canvas ref={canvasRef} style={{ width:"100%", height:"100%", display:"block" }} />
        {/* State hint below orb */}
        <div style={{ position:"absolute", bottom:"6px", left:0, right:0, textAlign:"center", height:"16px" }}>
          {orbState === "thinking" && (
            <span style={{ fontSize:"9px", letterSpacing:"0.28em", color:"rgba(255,171,64,0.65)", textTransform:"uppercase", animation:"fadePulse 1.1s ease-in-out infinite" }}>Processing inputs</span>
          )}
          {orbState === "responding" && (
            <span style={{ fontSize:"9px", letterSpacing:"0.28em", color:"rgba(0,229,255,0.55)", textTransform:"uppercase", animation:"fadePulse 1.4s ease-in-out infinite" }}>Outputting intelligence</span>
          )}
        </div>
      </div>

      {/* Divider line */}
      <div style={{ height:"1px", background:"linear-gradient(90deg,transparent,rgba(0,229,255,0.12),transparent)", zIndex:1, flexShrink:0 }} />

      {/* Chat history */}
      <div style={{ flex:1, overflowY:"auto", padding:"16px 16px 8px", zIndex:1, display:"flex", flexDirection:"column", gap:"14px", scrollbarWidth:"none" }}>

        {messages.length === 0 && (
          <div style={{ margin:"auto", textAlign:"center", padding:"20px 12px" }}>
            <div style={{ fontSize:"10px", letterSpacing:"0.25em", color:"rgba(0,229,255,0.3)", textTransform:"uppercase", marginBottom:"12px" }}>
              PGP coaching brain · active
            </div>
            <div style={{ fontSize:"13px", color:"rgba(0,229,255,0.18)", lineHeight:1.8, fontWeight:300, letterSpacing:"0.04em" }}>
              Programme design · Periodisation<br/>
              Fight camp planning · Exercise selection<br/>
              Athlete assessment · Loading logic
            </div>
            <div style={{ marginTop:"16px", display:"flex", flexWrap:"wrap", gap:"6px", justifyContent:"center" }}>
              {["Build me a programme","How do I periodise for a fighter","What's your take on Olympic lifts","Design a fight camp block"].map(q => (
                <button key={q} onClick={() => { setInput(q); textareaRef.current?.focus(); }}
                  style={{ background:"rgba(0,229,255,0.05)", border:"1px solid rgba(0,229,255,0.15)", borderRadius:"20px", padding:"5px 12px", color:"rgba(0,229,255,0.45)", fontSize:"11px", letterSpacing:"0.04em", cursor:"pointer", fontFamily:"'Barlow Condensed',sans-serif", transition:"all 0.2s" }}
                  onMouseEnter={e=>e.target.style.borderColor="rgba(0,229,255,0.35)"}
                  onMouseLeave={e=>e.target.style.borderColor="rgba(0,229,255,0.15)"}
                >{q}</button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg) => (
          <div key={msg.id} style={{ display:"flex", flexDirection: msg.role === "user" ? "row-reverse" : "row", gap:"10px", alignItems:"flex-start" }}>

            {msg.role === "assistant" && (
              <div style={{ flexShrink:0, width:"28px", height:"28px", borderRadius:"50%", background:"radial-gradient(circle at 38% 38%, rgba(0,229,255,0.85), rgba(0,80,140,0.5))", boxShadow:"0 0 12px rgba(0,229,255,0.4)", marginTop:"2px" }} />
            )}

            <div style={{
              maxWidth:"82%",
              padding:"10px 14px",
              borderRadius: msg.role === "user" ? "16px 3px 16px 16px" : "3px 16px 16px 16px",
              background: msg.role === "user" ? "rgba(0,229,255,0.07)" : "rgba(255,255,255,0.03)",
              borderLeft: msg.role === "assistant" ? "2px solid rgba(0,229,255,0.28)" : "none",
              borderRight: msg.role === "user" ? "2px solid rgba(0,229,255,0.18)" : "none",
              color: msg.role === "user" ? "rgba(220,248,255,0.9)" : "rgba(200,240,250,0.82)",
              fontSize:"13.5px",
              lineHeight:1.65,
              fontFamily:"'Barlow',sans-serif",
              fontWeight:300,
              whiteSpace:"pre-wrap",
              wordBreak:"break-word",
            }}>
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{ display:"flex", gap:"10px", alignItems:"center" }}>
            <div style={{ width:"28px", height:"28px", borderRadius:"50%", background:"radial-gradient(circle at 38% 38%, rgba(0,229,255,0.85), rgba(0,80,140,0.5))", boxShadow:"0 0 12px rgba(0,229,255,0.4)", animation:"coreBreath 0.8s ease-in-out infinite" }} />
            <div style={{ display:"flex", gap:"5px", alignItems:"center" }}>
              {[0,1,2].map(i => (
                <div key={i} style={{ width:"5px", height:"5px", borderRadius:"50%", background:"rgba(0,229,255,0.6)", animation:`dotBounce 0.9s ease-in-out ${i*0.15}s infinite` }} />
              ))}
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input area */}
      <div style={{ padding:"10px 14px 18px", zIndex:1, display:"flex", gap:"10px", alignItems:"flex-end", borderTop:"1px solid rgba(0,229,255,0.07)" }}>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Ask the coaching brain…"
          rows={1}
          style={{
            flex:1, background:"rgba(0,229,255,0.04)", border:"1px solid rgba(0,229,255,0.14)", borderRadius:"14px",
            padding:"10px 14px", color:"rgba(220,248,255,0.88)", fontSize:"14px", fontFamily:"'Barlow',sans-serif",
            fontWeight:300, resize:"none", outline:"none", lineHeight:1.5, maxHeight:"120px",
            overflowY:"auto", transition:"border-color 0.25s, box-shadow 0.25s",
          }}
          onFocus={e => { e.target.style.borderColor="rgba(0,229,255,0.38)"; e.target.style.boxShadow="0 0 20px rgba(0,229,255,0.08)"; }}
          onBlur={e => { e.target.style.borderColor="rgba(0,229,255,0.14)"; e.target.style.boxShadow="none"; }}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || isLoading}
          style={{
            flexShrink:0, width:"44px", height:"44px", borderRadius:"50%",
            background: input.trim() && !isLoading ? "radial-gradient(circle at 38% 38%, rgba(0,229,255,0.9), rgba(0,120,190,0.7))" : "rgba(0,229,255,0.07)",
            border:"1px solid rgba(0,229,255,0.25)", cursor: input.trim() && !isLoading ? "pointer" : "default",
            display:"flex", alignItems:"center", justifyContent:"center", transition:"all 0.25s",
            boxShadow: input.trim() && !isLoading ? "0 0 20px rgba(0,229,255,0.45)" : "none",
          }}
          onMouseEnter={e => { if (input.trim() && !isLoading) e.currentTarget.style.transform = "scale(1.08)"; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
            <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke={input.trim() && !isLoading ? "#fff" : "rgba(0,229,255,0.28)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        textarea::placeholder { color: rgba(0,229,255,0.22); }
        @keyframes statusBlink { 0%,100%{opacity:1} 50%{opacity:0.25} }
        @keyframes fadePulse { 0%,100%{opacity:0.7} 50%{opacity:0.25} }
        @keyframes dotBounce { 0%,100%{transform:translateY(0);opacity:0.4} 50%{transform:translateY(-5px);opacity:1} }
        @keyframes coreBreath { 0%,100%{box-shadow:0 0 12px rgba(0,229,255,0.4)} 50%{box-shadow:0 0 24px rgba(0,229,255,0.8)} }
      `}</style>
    </div>
  );
}
