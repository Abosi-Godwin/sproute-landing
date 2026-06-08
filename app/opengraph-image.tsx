import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Sproute — Find Local Businesses & Land Clients on WhatsApp";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  /* load Syne Bold from Google Fonts */
  const syneRes = await fetch(
    "https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjBZRjr0FKM_04uQ.woff2"
  );
  const syneData = await syneRes.arrayBuffer();

  const leads = [
    { name: "TopView Hotel Asaba", cat: "Hotel",    score: "10/10", hot: true  },
    { name: "Ella's Store",        cat: "Boutique", score: "8/10",  hot: false },
    { name: "Goodness Boutique",   cat: "Clothing", score: "7/10",  hot: false },
  ];

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          background: "#020617",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "64px 72px",
          fontFamily: "Syne, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background glow */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "30%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "rgba(16,185,129,0.07)",
            filter: "blur(80px)",
          }}
        />

        {/* grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(51,65,85,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(51,65,85,0.15) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* left — copy */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, zIndex: 1 }}>
          {/* logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "10px",
                background: "#10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              🌱
            </div>
            <span style={{ color: "#f1f5f9", fontSize: "28px", fontWeight: 800 }}>
              Sproute
            </span>
          </div>

          {/* headline */}
          <div style={{ display: "flex", flexDirection: "column", marginBottom: "24px" }}>
            <span style={{ color: "#f8fafc", fontSize: "72px", fontWeight: 800, lineHeight: 1.05 }}>
              Find businesses.
            </span>
            <span
              style={{
                fontSize: "72px",
                fontWeight: 800,
                lineHeight: 1.05,
                background: "linear-gradient(135deg, #34d399, #10b981)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Land clients.
            </span>
          </div>

          {/* subtext */}
          <p style={{ color: "#64748b", fontSize: "22px", lineHeight: 1.5, maxWidth: "460px", margin: 0 }}>
            AI-powered WhatsApp outreach for freelancers targeting local businesses.
          </p>

          {/* pills */}
          <div style={{ display: "flex", gap: "12px", marginTop: "36px" }}>
            {["Free forever", "No credit card", "Works on mobile"].map((t) => (
              <div
                key={t}
                style={{
                  background: "rgba(16,185,129,0.1)",
                  border: "1px solid rgba(16,185,129,0.25)",
                  borderRadius: "999px",
                  padding: "6px 16px",
                  color: "#34d399",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* right — dashboard card */}
        <div
          style={{
            width: "380px",
            background: "#0f172a",
            border: "1px solid rgba(51,65,85,0.6)",
            borderRadius: "20px",
            overflow: "hidden",
            zIndex: 1,
            boxShadow: "0 25px 60px rgba(0,0,0,0.5), 0 0 80px rgba(16,185,129,0.12)",
          }}
        >
          {/* browser chrome */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "12px 16px",
              borderBottom: "1px solid #1e293b",
            }}
          >
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(239,68,68,0.7)" }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(234,179,8,0.7)"  }} />
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "rgba(16,185,129,0.7)" }} />
            <span style={{ marginLeft: "auto", color: "#475569", fontSize: "11px" }}>sproute-rho.vercel.app</span>
          </div>

          {/* stats row */}
          <div style={{ display: "flex", borderBottom: "1px solid #1e293b" }}>
            {[{ l: "Saved", v: "200" }, { l: "Messaged", v: "18" }, { l: "Replied", v: "6" }].map((s) => (
              <div
                key={s.l}
                style={{
                  flex: 1,
                  padding: "10px 8px",
                  textAlign: "center",
                  borderRight: "1px solid #1e293b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span style={{ color: "#64748b", fontSize: "11px" }}>{s.l}</span>
                <span style={{ color: "#f8fafc", fontSize: "20px", fontWeight: 700, marginTop: "2px" }}>{s.v}</span>
              </div>
            ))}
          </div>

          {/* leads */}
          <div style={{ padding: "10px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {leads.map((l) => (
              <div
                key={l.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 12px",
                  borderRadius: "12px",
                  background: l.hot ? "linear-gradient(90deg,rgba(16,185,129,.12),transparent)" : "transparent",
                  border: `1px solid ${l.hot ? "rgba(16,185,129,.3)" : "transparent"}`,
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ color: "#f1f5f9", fontSize: "13px", fontWeight: 600 }}>{l.name}</span>
                  <span style={{ color: "#475569", fontSize: "11px", marginTop: "2px" }}>{l.cat}</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                  <span style={{ color: "#34d399", fontSize: "12px", fontWeight: 700 }}>{l.score}</span>
                  <span style={{ color: "#475569", fontSize: "10px", marginTop: "2px" }}>
                    {l.hot ? "🔥 Hot" : "⚡ Warm"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ai badge */}
          <div
            style={{
              margin: "0 10px 10px",
              padding: "10px 12px",
              background: "rgba(16,185,129,0.08)",
              border: "1px solid rgba(16,185,129,0.2)",
              borderRadius: "12px",
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <span style={{ fontSize: "14px" }}>✨</span>
            <span style={{ color: "#94a3b8", fontSize: "11px" }}>
              <span style={{ color: "#34d399", fontWeight: 600 }}>AI message ready</span>
              {" "}— "Hey TopView, noticed your listing…"
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Syne",
          data: syneData,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
