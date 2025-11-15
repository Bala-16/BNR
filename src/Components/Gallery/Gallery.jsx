import React, { useState, useEffect, useRef } from "react";

// 🎥 Videos
import AB from "../../assets/service/kovilpatti/AB.mp4";
import BA from "../../assets/service/usilampatti/BA.mp4";
import BB from "../../assets/service/usilampatti/BB.mp4";

// 🖼️ Images
import AAA from "../../assets/service/kovilpatti/AAA.jpg";
import BBB from "../../assets/service/usilampatti/BBB.jpg";



import DDD from "../../assets/service/ramnadu/DDD.jpg"
import D1 from "../../assets/service/ramnadu/D1.jpg"

import EEE from "../../assets/service/madurai1/EEE.jpg";
import E1 from "../../assets/service/madurai1/E1.jpg";
import E2 from "../../assets/service/madurai1/E2.jpg";
import E3 from "../../assets/service/madurai1/E3.jpg";
import E4 from "../../assets/service/madurai1/E4.jpg";
import E5 from "../../assets/service/madurai1/E5.jpg";

import FF from "../../assets/service/madurai1/1/FF.jpg";
import F1 from "../../assets/service/madurai1/1/F1.mp4";
import F2 from "../../assets/service/madurai1/1/F2.mp4";

import GG from "../../assets/service/madurai1/2/GG.jpg";
import G1 from "../../assets/service/madurai1/2/G1.jpg";
import G2 from "../../assets/service/madurai1/2/G2.jpg";
import G3 from "../../assets/service/madurai1/2/G3.jpg";
import G4 from "../../assets/service/madurai1/2/G4.jpg";

import HH from "../../assets/service/madurai1/3/HH.jpg";
import H1 from "../../assets/service/madurai1/3/H1.mp4";
import H2 from "../../assets/service/madurai1/3/H2.mp4";

import II from "../../assets/service/madurai1/4/II.jpg";
import I1 from "../../assets/service/madurai1/4/I1.mp4";
import I2 from "../../assets/service/madurai1/4/I2.mp4";

import JJ from "../../assets/service/madurai1/5/JJ.jpg";
import J1 from "../../assets/service/madurai1/5/J1.jpg";

import KK from "../../assets/service/madurai1/6/KK.jpg";
import K1 from "../../assets/service/madurai1/6/K1.mp4";
import K2 from "../../assets/service/madurai1/6/K2.mp4";

import LL from "../../assets/service/covai/LL.jpg";
import L1 from "../../assets/service/covai/L1.jpg";
import L2 from "../../assets/service/covai/L2.jpg";
import L3 from "../../assets/service/covai/L3.jpg";

import MM from "../../assets/service/sivaganga/MM.jpg";
import M1 from "../../assets/service/sivaganga/M1.mp4";
import M2 from "../../assets/service/sivaganga/M2.mp4";
import M3 from "../../assets/service/sivaganga/M3.mp4";

import NN from "../../assets/service/trichy/NN.jpg";
import N1 from "../../assets/service/trichy/N1.jpg";
import N2 from "../../assets/service/trichy/N2.mp4";
import N3 from "../../assets/service/trichy/N3.mp4";
import N4 from "../../assets/service/trichy/N4.mp4";

import OO from "../../assets/service/dindigul/OO.jpg";
import O1 from "../../assets/service/dindigul/O1.jpg";
import O2 from "../../assets/service/dindigul/O2.jpg";

import PP from "../../assets/service/theni/PP.jpg";
import P1 from "../../assets/service/theni/P1.jpg";
import P2 from "../../assets/service/theni/P2.jpg";
import P3 from "../../assets/service/theni/P3.jpg";

import QQ from "../../assets/service/tiruvallur/QQ.jpg"
import Q1 from "../../assets/service/tiruvallur/Q1.jpg"
import Q2 from "../../assets/service/tiruvallur/Q2.jpg"
import Q3 from "../../assets/service/tiruvallur/Q3.jpg"
export default function Gallery() {
  // ⭐ District Based Data
  const data = {
    kovilpatti: {
      title: "Kovilpatti",
      sites: [
        {
          siteTitle: "Site 1 – UPVC & Interior Finishing",
          subtitle: "Interior & UPVC Works",
          preview: AAA,
          media: [{ type: "video", src: AB }],
        },
      ],
    },

    usilampatti: {
      title: "Usilampatti",
      sites: [
        {
          siteTitle: "Poultry Farm Project",
          subtitle: "Full poultry farm fabrication & roofing works",
          preview: BBB,
          media: [
            { type: "video", src: BA },
            { type: "video", src: BB },
          ],
        },
      ],
    },

  
    Trichy: {
      title: "Trichy",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: NN,
          media: [
            { type: "image", src: NN },
            { type: "image", src: N1 },
            { type: "video", src: N2 },
            { type: "video", src: N3 },
            { type: "video", src: N4 },
            // { type: "image", src: C4 },
          ],
        },
      ],
    },

    Covai: {
      title: "Coimbatore",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: LL,
          media: [
            { type: "image", src: L1 },
            { type: "image", src: L2 },
            { type: "image", src: L3 },
            // { type: "image", src: C4 },
          ],
        },
      ],
    },
    dindigul: {
      title: "Dindigul",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: OO,
          media: [
            { type: "image", src: OO },
            { type: "image", src: O1 },
            { type: "image", src: O2 },
          ],
        },
      ],
    },

    theni: {
      title: "Theeni",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: PP,
          media: [
            { type: "image", src: PP },
            { type: "image", src: P1 },
            { type: "image", src: P2 },
            { type: "image", src: P3 },
          ],
        },
      ],
    },

     Ramnadu: {
      title: "Ramnadu",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: DDD,
          media: [
            { type: "image", src: DDD },
            { type: "image", src: D1 },
            // { type: "image", src: P1 },
            // { type: "image", src: P2 },
            // { type: "image", src: P3 },
          ],
        },
      ],
    },
      Tiruvallur: {
      title: "Tiruvallur",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: QQ,
          media: [
            { type: "image", src: Q1 },
            { type: "image", src: Q2 },
            { type: "image", src: Q3 },
            // { type: "image", src: P2 },
            // { type: "image", src: P3 },
          ],
        },
      ],
    },
    sivaganga: {
      title: "Sivaganga",
      sites: [
        {
          siteTitle: "Steel & Poultry Projects",
          // subtitle: "Steel, roofing & poultry farm fabrication projects",
          preview: MM,
          media: [
            { type: "video", src: M1 },
            { type: "video", src: M2 },
            { type: "video", src: M3 },
            // { type: "image", src: C4 },
          ],
        },
      ],
    },

    madurai: {
      title: "Madurai",
      sites: [
        {
          siteTitle: "Commercial Works",
          subtitle: "Fabrication & Interior",
          preview: EEE,
          media: [
            { type: "image", src: E1 },
            { type: "image", src: E2 },
            { type: "image", src: E3 },
            { type: "image", src: E4 },
            { type: "image", src: E5 },
          ],
        },

        {
          siteTitle: "Perungudi",
          subtitle: "Fabrication & Interior",
          preview: FF,
          media: [
            { type: "video", src: F1 },
            { type: "video", src: F2 },
          ],
        },

        {
          siteTitle: "Polycarbonate Sheet Work",
          // subtitle:"",
          preview: GG,
          media: [
            { type: "image", src: GG },
            { type: "image", src: G1 },
            { type: "image", src: G2 },
            { type: "image", src: G3 },
            { type: "image", src: G4 },
          ],
        },
        {
          siteTitle: "Arappalayam",
          preview: HH,
          media: [
            { type: "video", src: H1 },
            { type: "video", src: H2 },
          ],
        },
        {
          siteTitle: "Alanganallur",
          preview: II,
          media: [
            { type: "video", src: I1 },
            { type: "video", src: I2 },
          ],
        },
        {
          siteTitle: "Aruppukottai",
          preview: JJ,
          media: [
            { type: "image", src: J1 },
            { type: "image", src: JJ },
          ],
        },
        {
          siteTitle: "Madurai",
          preview: KK,
          media: [
            { type: "video", src: K1 },
            { type: "video", src: K2 },
          ],
        },
      ],
    },
  };

  const districts = Object.keys(data);

  const [activeDistrict, setActiveDistrict] = useState(null);
  const [activeSite, setActiveSite] = useState(null);
  const [activeMedia, setActiveMedia] = useState(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActiveMedia(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div
      className="py-30 min-h-screen bg-gray-50 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1341872413/photo/black-roof-tiles.jpg?s=612x612&w=0&k=20&c=wjCqyA4x4E8q3_q0VWXRwNdurHuCaUto1D72p1c8rQs=')",
      }}
    >
      {/* Main Heading */}
      <h2 className="text-5xl font-bold mb-10 text-center text-yellow-500 font-PT-Serif uppercase tracking-wide bg-black/40 py-4 rounded-xl">
        Project Gallery
      </h2>

      {/* Home → District Scroll */}
      {!activeDistrict && (
        <div className="overflow-hidden mb-12">
          <div
            className="flex gap-5"
            style={{
              animation: "scrollX 20s linear infinite",
              width: "max-content",
            }}
          >
            {districts.map((key) => {
              const d = data[key];
              return (
                <div
                  key={key}
                  onClick={() => setActiveDistrict(key)}
                  className="relative min-w-[200px] md:min-w-[280px]  md:h-[300px] rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                >
                  <img
                    src={d.sites[0].preview}
                    alt={d.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                    <h3 className="text-white text-lg font-semibold text-center px-2">
                      {d.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>

          <style>
            {`
              @keyframes scrollX {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>
        </div>
      )}

      {/* Inside District → Show Sites */}
      {activeDistrict && !activeSite && (
        <div className="max-w-6xl mx-auto px-4">
          <button
            onClick={() => setActiveDistrict(null)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
          >
            ← Back
          </button>

          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-2">
            {data[activeDistrict].title}
          </h2>

          {/* All Sites Inside District */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
            {data[activeDistrict].sites.map((site, i) => (
              <div
                key={i}
                onClick={() => setActiveSite(site)}
                className="bg-black/40 rounded-xl p-4 cursor-pointer hover:scale-[1.02] transition"
              >
                <img
                  src={site.preview}
                  className="w-full h-60 object-cover rounded-lg mb-3"
                />
                <h3 className="text-2xl text-yellow-400 font-semibold">
                  {site.siteTitle}
                </h3>
                <p className="text-white opacity-80">{site.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Inside Site → Media */}
      {activeSite && (
        <div className="max-w-7xl mx-auto px-4">
          <button
            onClick={() => setActiveSite(null)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
          >
            ← Back to Sites
          </button>

          <h2 className="text-4xl font-bold text-yellow-500 text-center mb-2">
            {activeSite.siteTitle}
          </h2>

          <p className="text-center text-lg text-white mb-8">
            {activeSite.subtitle}
          </p>

          {/* Media Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeSite.media.map((m, idx) => (
              <div
                key={idx}
                className="relative rounded-xl overflow-hidden bg-gray-200 shadow-md group"
              >
                {m.type === "video" ? (
                  <video
                    src={m.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-60 object-cover group-hover:scale-105 transition cursor-pointer"
                    onClick={() =>
                      setActiveMedia({ ...m, siteName: activeSite.siteTitle })
                    }
                  />
                ) : (
                  <img
                    src={m.src}
                    alt="project"
                    className="w-full h-60 object-cover group-hover:scale-105 transition cursor-pointer"
                    onClick={() =>
                      setActiveMedia({ ...m, siteName: activeSite.siteTitle })
                    }
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* MODAL */}
      {activeMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveMedia(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            ref={modalRef}
            className="max-w-5xl w-full bg-black rounded-lg overflow-hidden"
          >
            <h2 className="text-center text-xl font-semibold text-yellow-400 p-4">
              {activeMedia.siteName}
            </h2>

            {activeMedia.type === "video" ? (
              <video
                src={activeMedia.src}
                controls
                autoPlay
                className="w-full"
              />
            ) : (
              <img src={activeMedia.src} className="w-full" alt="" />
            )}

            <div className="p-3 bg-gray-900 flex justify-end">
              <button
                onClick={() => setActiveMedia(null)}
                className="text-white bg-red-600 px-4 py-1 rounded"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
