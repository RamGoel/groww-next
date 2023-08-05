"use client"
import { Api } from '@services/config'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toaster, toast } from 'react-hot-toast'
import axios from 'axios'
import { saveData } from '@redux/slices/checkoutSlice'
import '@styles/admin.css'
const AdminPage = () => {
    const uiMode = useSelector(state => state.global.uiMode)
    const [isLoading, setLoading] = useState(true)
    const data = useSelector(state => state?.checkout.data)
    const dispatch = useDispatch()


    const getAllRequests = () => {
        setLoading(true)
        axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/all-invites`).then(response => {
            dispatch(saveData(response?.data.data))
            console?.log(response)
        }).catch(err => {
            console?.log(err)
            toast.error("Error Occured")
        }).finally(() => {
            setLoading(false)
        })
    }

    const updateRequest = (id, isApproved, reason) => {
        setLoading(true)
        const apiData = {
            inviteId: id,
            status: isApproved ? 'approved' : 'forbidden',
            reason: !isApproved ? reason : 'Happy Journey!',
            boardingPassURL: 'google.com'
        }
        axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/change-invite-status`, apiData).then(response => {
            toast.success(isApproved ? 'Approved Successfully' : 'Rejected Successfully')
        }).catch(err => {
            console.log(err)
            toast.error("Error Occured")
        }).finally(() => {
            setLoading(false)
        })
    }

    useEffect(() => {
        getAllRequests()
    }, [])




    if (isLoading) return <p>Loading....</p>
    return (
        isLoading ? 'Loading....' : <div className={`admin-page ${uiMode}`}>
            <h2>Requests in Waiting</h2>
            <p>Please manually checkin and upload their boarding passes</p>
            <Toaster position='bottom-center' />
            {/* {JSON.stringify(data[0])} */}

            <table className='data-table'>
                <tr>
                    <th>S.no</th>
                    <th>Name1</th>
                    <th>Name2</th>
                    <th>Journey</th>
                    <th>Date</th>
                    <th>PNR1</th>
                    <th>PNR2</th>
                    <th>Type</th>
                    <th>Action</th>
                </tr>
                {
                    data.map((e, index) => {
                        return <tr>
                            <td>{index + 1}</td>
                            <td>{e?.creator?.fname + ' ' + e?.creator?.lname}</td>
                            <td>{e?.acceptor?.fname + ' ' + e?.acceptor?.lname}</td>
                            <td>{e?.creator?.trip?.source}...{e?.creator?.trip?.destination}</td>
                            <td>{e?.creator?.trip?.tripDate}</td>
                            <td>{e?.creator?.trip?.pnr}</td>
                            <td>{e?.acceptor?.trip?.pnr}</td>
                            <td>{e?.type}</td>
                            <td>
                                <button style={{
                                    backgroundColor:'green'
                                }} onClick={() => updateRequest(e?._id, true, '')}>Approve</button>
                                <button onClick={() => updateRequest(e?._id, false, 'PNR not provided')}>Reject</button>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default AdminPage