function Navbar() {
  return (
    <nav className=" py-1 relative flex-auto bg-gray-800 ">
      <div className="container mx-auto text-white flex ">
        <img src="/public/svg/logo.svg" className="flex max-h-12" alt="" />
    <div className="flex justify-end flex-grow">
      <p className="py-2.5 px-5">Paginas Web</p>
        <p className="py-2.5 px-5">Aplicaciones Web</p>
        <p className="py-2.5 px-5">Contactanos</p>
    </div>
        
      </div>

     

    </nav>
  )
}

export default Navbar