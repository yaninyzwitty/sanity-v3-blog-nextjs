import Link from "next/link"
import Image from "next/image"


function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
        <div className="flex items-center space-x-2">
            <Link href='/'>
                <img 
                className="rounded-full h-16 w-16 object-cover"
                width={16}
                height={16}
                src="https://images.unsplash.com/photo-1669846483257-a2f9d3808ccb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                
                alt="logo"/>
            </Link>
            <h1>YANINYZ WITTY</h1>
        </div>
        <div>
          <Link href={`https://github.com/yaninyzwitty`} className="px-5 py-3 text-sm md:text-base bg-gray-500 text-[#F7AB0A] flex items-center rounded-full text-center">
            View the my github projects

          </Link>
        </div>
    </header>
  )
}

export default Header