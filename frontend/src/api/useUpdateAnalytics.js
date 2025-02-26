import {useState} from 'react'
import toast from 'react-hot-toast'

const useUpdateAnalytics = () => {
    
    const [editLoading, setEditLoading] = useState(false);
    const updateAnalytics = async(data) => {
        setEditLoading(true)
        try {
            const res = await fetch("http://localhost:3000/api/stats",{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
        catch(error){
            toast.error(error.message);
        }
        finally{
            setEditLoading(false)
        }
    }

    return {editLoading, updateAnalytics}
}

export default useUpdateAnalytics;