import { useRouter } from 'next/navigation';
import { SetStateAction, useState, useEffect } from "react";
export default function ScriptsCliente(){
    const [scrollingDown, setScrollingDown] = useState(false);
    const handleScroll = () => {
        const scrollY = window.scrollY;

        if (scrollY > 100) {
            setScrollingDown(true);

        } else {
            setScrollingDown(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [inputValue, setinputValue] = useState('');
    const router = useRouter();

    const [Animation, setAnimation] = useState(false);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {

            if (inputValue == '') {
                router.push('/');
            } else {
                console.log("valor", inputValue)
                router.push(`/Busqueda/${decodeURIComponent(inputValue.toLowerCase())}`)
                
            }
        }
    }
    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        const assess = setinputValue(event.target.value);
    };

    return{
        scrollingDown,
        Animation,
        handleKeyDown,
        handleChange,
        inputValue
    }
}