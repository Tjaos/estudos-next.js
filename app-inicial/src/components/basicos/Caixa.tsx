export default function Caixa(props: any){
    return(
        <div className={`
            flex justify-center items-center
            bg-purple-500 rounded-md p-5
            w-[300px] h-[300px] text-5xl font-thin
            
        `}>
            {props.children}
        </div>
    )
}