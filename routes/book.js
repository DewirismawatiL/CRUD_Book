const express = require('express')
const router = express.Router()
const {
    getBooks,
    getBook,
    addBook,
    updateBook,
    deleteBook
} = require('../controllers/BookController')

//route untuk menampilkan data
router.get('/', getBooks)

//route untuk mengirim data
// router.post('/', )

router.post('/', addBook)//route untuk mengirim data

router.get('/:id', getBook)//route untuk menampilkan data berdasarkan id buku
// router.get('/:id', (req, res) => {
// })
router.put('/:id', updateBook)//route untuk memperbaharui/update data berdasarkan id buku

router.delete('/:id', deleteBook)//route ini untuk menghapus data
//route untuk memperbaharui/update data
// router.put('/:id', (req, res) => {
//     res.write('PUT book code')
//     res.end()
// })

// //route untuk menghapus data
// router.delete('/:id', (req, res) => {
//     res.write('DELETE book code')
//     res.end()
// })

module.exports = router