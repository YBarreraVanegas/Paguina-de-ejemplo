const Button = () => {
const nombre = 'Contacto'
  
    return (  
    <>
      <button>
        <span className="shadow"></span>
        <span className="edge"></span>
        <span className="front text">{nombre}</span>
      </button>
    </>
  );
};

export default Button;
