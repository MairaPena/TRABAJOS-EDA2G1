import { useState, useEffect } from 'react';

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null
    })

    const fetchData = async () => {
        setState({
            data: null,
            isLoading: true,
            hasError: null
        })

        try {
            const response = await fetch(url);
            const result = await response.json();

            setState({
                data: result,
                isLoading: false,
                hasError: null
            })

        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: error
            })
        }
    }

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [url])

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
