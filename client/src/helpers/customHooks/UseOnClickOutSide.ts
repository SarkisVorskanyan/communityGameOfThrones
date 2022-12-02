import React, { useEffect } from 'react';

const useOnClickOutside = (ref: React.RefObject<HTMLInputElement>, handler: (event: boolean) => void) => {
    useEffect(() => {
        const listener = (event: any) => {
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener('click', listener);
        return () => {
            document.removeEventListener('click', listener);
        };
    }, [ref, handler]);
}

export default useOnClickOutside


