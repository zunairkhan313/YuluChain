'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

import ControlPointIcon from '@mui/icons-material/ControlPoint'
import '../components/hr.css'

const Admin = () => {
  const router = useRouter()

  /* Get Categories */
  const [allCategories, setAllCategories] = useState([])

  const handleGetAllCategories = async () => {
    try {
      fetch(`/api/category`)
        .then(res => res.json())
        .then(data => setAllCategories(data.Categories || []))
        .catch(err => console.log(err))
    } catch (error) {
      console.error('Error fetching categories:', error)
    }
  }

  useEffect(() => {
    handleGetAllCategories()
  }, [])

  /* Category States */
  const [title1, setTitle1] = useState('')
  const [description1, setDescription1] = useState('')
  const [img1, setImg1] = useState('')

  /* Product States */
  const [categoryId, setCategoryId] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [img, setImg] = useState('')
  const [smprice, setSmPrice] = useState('')
  const [mdprice, setMdPrice] = useState('')
  const [lgprice, setLgPrice] = useState('')
  const [xlprice, setXlPrice] = useState('')
  const [discount, setDiscount] = useState('')
  const [disPrice, setDisPrice] = useState('')
  const [small, setSmall] = useState('')
  const [medium, setMedium] = useState('')
  const [large, setLarge] = useState('')
  const [xlarge, setXlarge] = useState('')
  const [code, setCode] = useState('')
  const [video, setVideo] = useState('')
  const [stock, setStock] = useState('')
  console.log('Stock', stock)

  /* Calculate Discounted Price */
   useEffect(() => {
    if (smprice && discount && !isNaN(smprice) && !isNaN(discount)) {
      const percentage = discount / 100
      const discountedPrice = smprice / (1 - percentage)
      setDisPrice(Math.round(discountedPrice.toFixed(2))) // Set to 2 decimal points
    } else {
      setDisPrice(null) // Reset discounted price to null if discount is blank or invalid
    }
  }, [smprice, discount])

  const handleUploadImage = e => {
    const files = e.target.files
    const urls = []

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader()

      reader.onload = e => {
        urls.push(e.target.result)
        if (urls.length === files.length) {
          setImg(urls)
          setImg1(urls)
        }
      }

      reader.readAsDataURL(files[i])
    }
  }

  const handleSubmitProduct = async e => {
    e.preventDefault()
    try {
      if (!title || !description || !categoryId || !code || !img || !stock) {
        alert('Please fill all required fields')
        return
      }

      const sanitizedSmPrice = Math.floor(smprice)
      const sanitizedMdPrice = Math.floor(mdprice)
      const sanitizedLgPrice = Math.floor(lgprice)
      const sanitizedXlPrice = Math.floor(xlprice)

      const res = await fetch(`/api/products`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          title,
          description,
          img,
          smprice: sanitizedSmPrice,
          mdprice: sanitizedMdPrice,
          lgprice: sanitizedLgPrice,
          xlprice: sanitizedXlPrice,
          small,
          medium,
          large,
          xlarge,
          discount,
          disPrice,
          code,
          video,
          stock,
          categoryId
        })
      })

      if (res.ok) {
        alert('Product created successfully')
        router.push('/category')
      } else {
        throw new Error('Failed to create a product')
      }
    } catch (error) {
      console.error('Error creating product:', error)
    }
  }

  const handleSubmitCategory = async e => {
    e.preventDefault()

    if (!title1 || !description1 || !img1) {
      alert('Please fill all required fields')
      return
    }
    try {
      const res = await fetch(`/api/category`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ title1, description1, img1 })
      })

      if (res.ok) {
        alert('Category created successfully')
        router.push('/category')
      } else {
        throw new Error('Failed to create a category')
      }
    } catch (error) {
      console.error('Error creating category:', error)
    }
  }

  return (
    <>
      <style>{`
        body {
          background-color: white;
        }
      `}</style>
      <div className='container mt-5'>
        <div className='text-[44px] font-extrabold tracking-wider bgVideoText'>
          <h1 className='heading text-black font-bold'>Admin Panel</h1>
        </div>
        <div className='hr-admin'></div>
        <br />

        <div className='row'>
          <div className='col-lg-6'>
            <div className='container'>
              <br />

              {/* Add Category */}
              <div className='flex justify-around'>
                <div>
                  <form onSubmit={handleSubmitCategory}>
                    <div
                      style={{ border: '1px solid gray' }}
                      className='container mt-5 p-4 rounded border-gray-200'
                    >
                      <h1 className='text-3xl font-bold text-center mb-1'>
                        Add Category
                      </h1>
                      <hr />
                      <br />
                      <label>Title</label>
                      <br />
                      <input
                        onChange={e => setTitle1(e.target.value)}
                        value={title1}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Title'
                      />
                      <br />
                      <br />
                      <label>Description</label>
                      <textarea
                        rows='4'
                        value={description1}
                        onChange={e => setDescription1(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Description'
                      />
                      <br />
                      <br />
                      <label
                        htmlFor='file-upload'
                        className='custom-file-upload1 w-[100%]'
                      >
                        <div className='flex justify-between'>
                          <div>Image Upload</div>
                          <div>
                            <ControlPointIcon />
                          </div>
                        </div>
                      </label>
                      <input
                        id='file-upload'
                        type='file'
                        className='w-[100%]'
                        onChange={handleUploadImage}
                      />
                      <br />
                      <div className='container px-10 mx-0 min-w-full flex flex-col items-center'>
                        <button
                          type='submit'
                          className='mt-3 bg-[#248ccb] text-white hover:bg-black font-bold py-2 px-4 rounded'
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='container mt-3'>
              {/* Add Product */}
              <div className='flex justify-around'>
                <div>
                  <form onSubmit={handleSubmitProduct}>
                    <div
                      style={{ border: '1px solid gray' }}
                      className='container mt-5 p-4 rounded border-gray-200'
                    >
                      <h1 className='text-3xl font-bold text-center mb-1'>
                        Add Product
                      </h1>
                      <hr />
                      <br />
                      <label>Title</label>
                      <br />
                      <input
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Title'
                      />
                      <br />
                      <br />
                      <label>Description</label>
                      <textarea
                        rows='4'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Description'
                      />
                      <br />
                      <br />
                      <label>Category</label>
                      <select
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        onChange={e => setCategoryId(e.target.value)}
                      >
                        {allCategories?.length > 0 ? (
                          <>
                            <option disabled selected>
                              Select category
                            </option>
                            {allCategories.map(item => (
                              <>
                                <option value={item?._id}>
                                  {item?.title1}
                                </option>
                              </>
                            ))}
                          </>
                        ) : (
                          <option>No categories found</option>
                        )}
                      </select>
                      <br />
                      <br />
                      <label>Size 1</label>
                      <input
                        value={small}
                        onChange={e => setSmall(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='size 1'
                      />
                      <br />
                      <br />
                      <label>Size 2</label>
                      <input
                        value={medium}
                        onChange={e => setMedium(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='size 2'
                      />
                      <br />
                      <br />
                      <label>Size 3</label>
                      <input
                        value={large}
                        onChange={e => setLarge(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='size 3'
                      />
                      <br />
                      <br />
                      <label>Size 4</label>
                      <input
                        value={xlarge}
                        onChange={e => setXlarge(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='size 4'
                      />
                      <br />
                      <br />
                      <label>Price 1</label>
                      <input
                        value={smprice}
                        onChange={e => setSmPrice(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Price 1'
                      />
                      <br />
                      <br />
                      <label>Price 2</label>
                      <input
                        value={mdprice}
                        onChange={e => setMdPrice(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Price 2'
                      />
                      <br />
                      <br />
                      <label>Price 3</label>
                      <input
                        value={lgprice}
                        onChange={e => setLgPrice(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Price 3'
                      />
                      <br />
                      <br />
                      <label>Price 4</label>
                      <input
                        value={xlprice}
                        onChange={e => setXlPrice(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Price 4'
                      />
                      <br />
                      <br />
                      <label>Discount</label>
                      <input
                        value={discount}
                        onChange={e => setDiscount(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Discount'
                      />
                      <br />
                      <br />

                      <label>Discounted Price: </label>
                      <input
                        type='text'
                        value={disPrice !== null ? disPrice : ''}
                        readOnly
                      />
                      <br />
                      <br />
                      <label>Code</label>
                      <input
                        value={code}
                        onChange={e => setCode(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Code'
                      />
                      <br />
                      <br />
                      <label>Video Link</label>
                      <input
                        value={video}
                        onChange={e => setVideo(e.target.value)}
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        type='text'
                        placeholder='Video Link'
                      />
                      <br />
                      <br />
                      <select
                        className='mt-1 w-[100%] border border-gray-200 py-2 px-6 rounded'
                        onChange={e => setStock(e.target.value)}
                      >
                        <option disabled selected>
                          Select Stock
                        </option>
                        <option>In Stock</option>
                        <option>Out of Stock</option>
                      </select>
                      <br />
                      <br />
                      <div className='flex flex-wrap gap-1'>
                        {img?.length > 0 &&
                          img.map((item, index) => (
                            <img
                              src={item}
                              key={index}
                              height={200}
                              width={200}
                              className='my-1'
                            />
                          ))}
                      </div>
                      <br />
                      <br />
                      <label
                        htmlFor='file-upload-product'
                        className='custom-file-upload1  w-[100%]'
                      >
                        <div className=' flex justify-between'>
                          <div>Image Upload</div>
                          <div>
                            <ControlPointIcon />
                          </div>
                        </div>
                      </label>
                      <input
                        id='file-upload-product'
                        type='file'
                        className='hidden'
                        onChange={handleUploadImage}
                        multiple
                      />
                      <br />
                      <div className='container px-10 mx-0 min-w-full flex flex-col items-center'>
                        <button
                          type='submit'
                          className='mt-3 bg-[#248ccb] text-white hover:bg-black font-bold py-2 px-4 rounded'
                        >
                          Upload
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}

export default Admin
