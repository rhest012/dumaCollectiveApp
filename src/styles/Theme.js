import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme ({
    colors: {
      brand: {
        900: "#1d1749"
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
            fontSize: { base:"2.88rem", sm:"2.88rem", md:"2.88rem", lg:"3.05rem", xl:"3.05rem"},
            letterSpacing: "1.5px",
            color: "#1E174B"
          },
          h2: {
            fontWeight: 800,
            fontSize: "2.44rem",
            letterSpacing: "1.5px",
            color: "#1E174B",
            paddingBottom: { base:"1rem", sm:"1rem", md:"1rem", lg:"1rem", xl:"1rem"}
          },
          h3: {
            fontWeight: 600,
            fontSize: "1.95rem",
            letterSpacing: "1.5px",
       
          },
          h4: {
            fontWeight: 600,
            fontSize: "1.56rem",
            letterSpacing: "1.5px",
            
          },
          h5: {
            fontWeight: 600,
            fontSize: "1.25rem",
            letterSpacing: "1.5px",
            color: "#1E174B"
            
          },
          h6: {
            fontWeight: 500,
            fontSize: "1.25rem",
            color: "#1E174B",
          },
          p: {
            fontSize: "1rem",
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
      },
      Button: {
        variants: {
          standardButton: {
            marginTop:"2rem",
            background:"#1E174B", 
            width:"8rem", 
            paddingY:"1.5rem",
            color:"#fff", 
            borderRadius:"0.5rem",
            border: "1px solid #1E174B",
            _hover : {
              color:"#1E174B",
              background:"none",
              border: "1px solid #1E174B"
            }
          },
          standardButtonLight: {
            marginY:"2rem",
            background:"#fff", 
            width:"8rem", 
            paddingY:"1.5rem",
            color:"#1E174B", 
            borderRadius:"0.5rem",
            border: "1px solid #fff",
            _hover : {
              color:"#fff",
              background:"none",
              border: "1px solid #fff"
            }
          }
        }
      }
  }
})

export default theme