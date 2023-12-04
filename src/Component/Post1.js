import React, { useEffect, useState } from 'react'
import { Input, Button, Row, Col } from 'reactstrap'
import DataTable from './Datatable'
import axios from "axios"

export default function Post() {
    const [post, setPost] = useState([])
    const [selectPost, setSelectPost] = useState([])
    const [data, setData] = useState({
        title: "",
        body: ""
    })
    const [msg, setMsg] = useState('')
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                setPost(response.data);
            })
    }, [])
    const addPost = () => {
        console.log("data", data)
        const postData = {
            userId: (post.length + 1),
            id: (post.length + 1),
            title: data.title,
            body: data.body
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', postData)
            .then((response) => {
                console.log("successfully add")
                setData({
                    title: "",
                    body: ""
                })
                setMsg("Add successfully")
            }).catch(() => {
                setMsg("error")
            })
    }
    const editPost = () => {
        console.log("data", data)
        const postData = {
            userId: (post.length + 1),
            id: (post.length + 1),
            title: data.title,
            body: data.body
        }
        axios.put(`https://jsonplaceholder.typicode.com/posts/${selectPost.id}`, postData)
            .then((response) => {
                console.log("successfully add")
                setData({
                    title: "",
                    body: ""
                })
                setMsg("Edit successfully")
            }).catch(() => {
                setMsg("error")
            })
    }
    const deletePost = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${selectPost.id}`)
            .then((response) => {
                console.log("successfully add")
                setData({
                    title: "",
                    body: ""
                })
                setMsg("delete successfully")
            }).catch(() => {
                setMsg("error")
            })
    }
    useEffect(() => {
        setData({
            title: selectPost ? selectPost.title : "",
            body: selectPost ? selectPost.body : ""
        })
    }, [selectPost])
    return (
        <>
            <Row>
                <h3>Add Post</h3>
                <Col>
                    <Input
                        autoComplete="off"
                        autoFocus
                        type='textarea'
                        id="title"
                        placeholder='title'
                        value={data.title}
                        onChange={(e) => setData({ ...data, title: e.target.value, })}
                        className={'post-title'}
                    />

                </Col>
                <Col>
                    <Input
                        autoComplete="off"
                        autoFocus
                        type='textarea'
                        id="body"
                        value={data.body}
                        placeholder='body'
                        onChange={(e) => setData({ ...data, body: e.target.value })}
                        className={'post-body'}
                    />

                </Col>
                <Col>
                    <Button className="post-button" onClick={() => addPost()}>Add Post</Button>
                    <Button className="post-button" onClick={() => editPost()}>Edit Post</Button>
                    <Button className="post-button" onClick={() => deletePost()}>Delete Post</Button>
                </Col>
                <Col>
                    <h3>{msg}</h3>
                </Col>

            </Row>
            {post.length !== 0 ? <DataTable posts={post} setSelectPost={setSelectPost} /> : null}

        </>
    )
}