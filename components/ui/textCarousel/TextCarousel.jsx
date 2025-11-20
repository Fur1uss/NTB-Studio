import React from 'react';

export default function InfiniteScrollPhrases() {
  const phrases = [
    "PASION POR CREAR",
    "IMPACTO POSITIVO",
    "CRECIMIENTO",
    "PROPOSITO",
    "CERCANIA",
    "INNOVACION"
  ];

  const separatorImage = "./Bang.svg";

  return (
    <div style={styles.container}>
      <div style={styles.scrollWrapper}>
        <div style={styles.scrollContent}>
          {/* Primera iteración */}
          {phrases.map((phrase, index) => (
            <React.Fragment key={`first-${index}`}>
              <div style={styles.phraseContainer}>
                <span style={styles.phraseText}>
                  {phrase}
                </span>
              </div>
              <div style={styles.imageContainer}>
                <img 
                  src={separatorImage} 
                  alt="Separador decorativo" 
                  style={styles.image}
                />
              </div>
            </React.Fragment>
          ))}
          
          {/* Segunda iteración (duplicado para scroll infinito) */}
          {phrases.map((phrase, index) => (
            <React.Fragment key={`second-${index}`}>
              <div style={styles.phraseContainer}>
                <span style={styles.phraseText}>
                  {phrase}
                </span>
              </div>
              <div style={styles.imageContainer}>
                <img 
                  src={separatorImage} 
                  alt="Separador decorativo" 
                  style={styles.image}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden'
  },
  scrollWrapper: {
    position: 'relative',
    width: '100%'
  },
  scrollContent: {
    display: 'flex',
    animation: 'scroll 30s linear infinite'
  },
  phraseContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '32px',
    paddingRight: '32px',
    whiteSpace: 'nowrap'
  },
  phraseText: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: '0.05em'
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '32px',
    paddingRight: '32px'
  },
  image: {
    width: '40px',
    height: '40px',
    objectFit: 'contain'
  }
};