const SideOrbs = () => {
  return (
    <div id="side-orb-container" className="w-full absolute inset-0 flex items-center z-[-1]" style={{opacity: 0}}>

        <div className='size-[300px] absolute side-orbs left-[-10%] rounded-full hidden lg:block blur-[250px]' style={{background: 'transparent'}} />
        <div className='size-[300px] absolute side-orbs right-[-10%] rounded-full hidden lg:block blur-[250px]' style={{background: 'transparent'}} />

    </div>
  )
}

export default SideOrbs
