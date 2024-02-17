import { useEffect, useState } from "react";

type Props = {
    defaultValues?: any
}
const useGetFormData = (props: Props) => {
    const [data, setData] = useState<any>({})

    useEffect(() => {
        if (props.defaultValues) {
            setData(props.defaultValues)
        }
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    return {
        handleChange,
        data
    };
}

export default useGetFormData;