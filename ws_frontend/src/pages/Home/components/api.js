import http from '@/lib/http'
import React from 'react'

const loadUsers = (page=0) => { //sayfaya deger verilmemişse 0. sayfadan basla
    return http.get("/api/v1/users",{params:{page:0, size:5}})
}

export default loadUsers