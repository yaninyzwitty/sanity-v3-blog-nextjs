import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title } = props;
  return (
    <div className="flex items-center space-x-2">
        <img
        className="rounded-full object-cover h-16 w-16"
        height={16}
        width={16}

        src="https://images.unsplash.com/photo-1670840927510-590eb4de2346?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60" 
        alt="logo" 
        />
        {renderDefault && <>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo