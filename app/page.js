export default function HomePage() {
  const timeline = [
    {
      title: "Early Years",
      text: "Born in Netrokona in the Bengal Presidency under British rule, Birendranath Sanyal spent his formative years in Mymensingh before later moving to Kolkata in search of opportunity.",
    },
    {
      title: "Struggle and Responsibility",
      text: "Arriving in Kolkata with extremely limited resources, he worked tirelessly to support not only himself but also his entire family as the sole earning member.",
    },
    {
      title: "Innovation and Experimentation",
      text: "Driven by curiosity and determination, he established his own experimental laboratory and pursued scientific and industrial innovation through practical experimentation.",
    },
    {
      title: "Industrial Pioneer",
      text: "He emerged as one of the pioneers of high-tension SRBP electrical insulation manufacturing and Phenolic Resin manufacturing in India.",
    },
    {
      title: "Legacy",
      text: "Remembered for his kindness, discipline, intellect, and generosity, he left behind a legacy that continues to inspire family, colleagues, and all who knew him.",
    },
  ];

  return (
    <main
      style={{
        backgroundColor: "#09090b",
        color: "#e7e5e4",
        minHeight: "100vh",
        fontFamily: "serif",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
          borderBottom: "1px solid #27272a",
        }}
      >
        <h1
          style={{
            fontSize: "64px",
            marginBottom: "20px",
          }}
        >
          Birendranath Sanyal
        </h1>

        <p
          style={{
            fontSize: "26px",
            color: "#a8a29e",
            fontStyle: "italic",
            marginBottom: "50px",
          }}
        >
          “A life of innovation, discipline, and quiet generosity.”
        </p>

        <div
          style={{
            width: "320px",
            height: "420px",
            margin: "0 auto",
            backgroundColor: "#27272a",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Portrait Placeholder
        </div>
      </section>

      {/* Biography */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 20px",
          lineHeight: "2",
          fontSize: "20px",
        }}
      >
        <h2 style={{ fontSize: "42px", marginBottom: "40px" }}>
          Biography
        </h2>

        <p>
          Birendranath Sanyal was a pioneering innovator,
          industrial thinker, and self-made technologist
          whose life embodied resilience, discipline,
          and generosity.
        </p>

        <p>
          Born in Netrokona in the Bengal Presidency under
          British India, he spent his early years in
          Mymensingh before moving to Kolkata in search
          of opportunity.
        </p>

        <p>
          As the sole earning member, he helped educate
          and establish his brothers and sisters while
          extending support to relatives, friends,
          and many others whose lives he quietly transformed.
        </p>

        <p>
          Deeply driven and intellectually curious,
          he developed remarkable expertise despite
          having limited formal scientific training.
        </p>

        <p>
          He built his own experimental laboratory
          and emerged as one of the pioneers of
          high-tension SRBP electrical insulation
          manufacturing in India.
        </p>

        <p>
          Remembered for his kindness, innovation,
          and unwavering discipline, he leaves behind
          a lasting legacy of perseverance, intellect,
          and service to others.
        </p>
      </section>

      {/* Legacy */}
      <section
        style={{
          backgroundColor: "#18181b",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "42px",
              marginBottom: "60px",
            }}
          >
            Legacy
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
            }}
          >
            {[
              {
                title: "Pioneer in Electrical Insulation",
                text: "Among the early pioneers of high-tension SRBP electrical insulation manufacturing in India.",
              },
              {
                title: "Innovator and Builder",
                text: "Designed and developed manufacturing machinery independently through experimentation and practical ingenuity.",
              },
              {
                title: "Scientific Curiosity",
                text: "Established his own experimental laboratory and pursued continuous innovation throughout his life.",
              },
              {
                title: "Family and Community",
                text: "Dedicated himself to uplifting family members, relatives, friends, and others through education and support.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#27272a",
                  padding: "30px",
                  borderRadius: "20px",
                }}
              >
                <h3 style={{ marginBottom: "20px", fontSize: "26px" }}>
                  {item.title}
                </h3>

                <p style={{ color: "#d6d3d1", lineHeight: "1.8" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "100px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "70px",
          }}
        >
          Life Journey
        </h2>

        {timeline.map((item, index) => (
          <div
            key={index}
            style={{
              borderLeft: "2px solid #52525b",
              paddingLeft: "30px",
              marginBottom: "50px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: "#d6d3d1",
                lineHeight: "1.9",
                fontSize: "18px",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>

      {/* Quote */}
      <section
        style={{
          backgroundColor: "#18181b",
          padding: "120px 20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <p
            style={{
              fontSize: "42px",
              fontStyle: "italic",
              lineHeight: "1.7",
              color: "#f5f5f4",
            }}
          >
            “His life was defined not merely by achievement,
            but by the number of lives he uplifted along the way.”
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
          }}
        >
          Gallery
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#d6d3d1",
            lineHeight: "2",
            fontSize: "20px",
          }}
        >
          This gallery will gradually expand with photographs,
          memories, and archival moments celebrating the life
          and legacy of Birendranath Sanyal.
        </p>
      </section>

      {/* Remembrance */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          borderTop: "1px solid #27272a",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "40px",
            }}
          >
            In Remembrance
          </h2>

          <p
            style={{
              color: "#d6d3d1",
              lineHeight: "2",
              fontSize: "20px",
            }}
          >
            This tribute stands as a remembrance of a remarkable
            life marked by perseverance, innovation, dignity,
            and compassion.
          </p>
        </div>
      </section>
    </main>
  );
}
