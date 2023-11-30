import { useEffect } from 'react';

export function useDocumentTitle(name) {
    useEffect(() => {
        console.log(name)
        document.title = name;
    }, [name])
}