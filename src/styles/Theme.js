import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    colors: {
      brand: {
        900: "#1E174B"
      }
    },
    fonts : {
        body: "'Avenir Next', Arial, sans-serif",
        heading: "'Roc Grotesk Wide', sans-serif"
    },
    components: {
      Heading: {
        variants: {
          h1: {
            fontWeight: 600,
            fontSize: "4.77rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#1E174B"
          },
          h2: {
            fontWeight: 800,
            fontSize: "3.05rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#1E174B",
            paddingBottom: "2rem"
          },
          h3: {
            fontWeight: 600,
            fontSize: "2.44rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
       
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.95rem",
            letterSpacing: "1.5px",
            marginBottom: "1rem",
            color: "#1E174B",
            textTransform: "uppercase",
          },
          h5: {
            fontWeight: 600,
            fontSize: "1.56rem",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#1E174B"
            
          },
          h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            textTransform: "uppercase",
            color: "#1E174B",
          },
          p: {
            fontSize: "1.25rem",
            fontWeight:"regular",
            color: "#1E174B",
          }
        },
      },
      Image: {
        variants: {
          dumaImage: {
            borderRadius: "0.5rem"
          }
        }
      }
  }
})

export default theme