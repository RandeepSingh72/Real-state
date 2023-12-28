import React, {useState} from 'react'
import { storage, ref, uploadBytes, getDownloadURL } from '../firebase/firebase';

const AdminForm = ({ type, handleSubmit, addedPhotos, setAddedPhotos, propertyName, setPropertyName, propertyType, setPropertyType, address, setAddress, saleType, setSaleType, featured, setFeatured, areaSq, setAreaSq, neighbourhood, setNeighbourHood, photoLink, setPhotoLink, beds, setBeds, bathroom, setBathroom, description, setDescription}) => {
 
  const handleUpload = async (e) => {
    e.preventDefault()

  if (!addedPhotos || addedPhotos.length === 0) {
    return;
  }

  try {
    const uploadedUrls = [];

    // Iterate through each selected file and upload it
    for (const file of addedPhotos) {
      const storageRef = ref(storage, `images/${file.name}`);
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);

      // Add the URL to the array
      uploadedUrls.push(url);
    }

    setPhotoLink((prevPhotoLink) => [...prevPhotoLink, ...uploadedUrls.flat()]);
  } catch (error) {
    console.error('Error uploading files:', error);
  }
  };


  return (
   <div className='mx-4'>
    <h3>{type} a Property</h3>
    <form onSubmit={handleSubmit} className='mx-4 items-center justify-center'>
    <div className="mb-3">
    <label className="form-label">Property Name</label>
    <input type="text" value={propertyName} onChange={(e) => setPropertyName(e.target.value)} className="form-control" />
  </div>

  <div className="mb-3">
    <label className="form-label">Address</label>
    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" />
  </div>

  <div className='d-flex flex-wrap gap-3'>
  <div className="mb-3">
    <label className="form-label">Sale Type</label>
    <select 
     className="form-select"
     value={saleType}
     onChange={(e) => setSaleType(e.target.value)}>
    <option value="For Sale">For Sale</option>
    <option value="Rent">Rent</option>
    <option value="Sold Out">Sold Out</option>
    </select>
  </div>
  <div className="mb-3">
    <label className="form-label">Featured</label>
    <select 
    className="form-select" 
    value={featured}
    onChange={(e) => setFeatured(e.target.value)}>
    <option value="yes">Yes</option>
    <option value="no">No</option>
    </select>
  </div>
  <div className="mb-3">
    <label className="form-label">Area Sq.feet</label>
    <input type="number" value={areaSq} onChange={(e) => setAreaSq(e.target.value)} className='form-control w-100' style={{border:'1px solid rgb(197 197 197)'}} />
  </div>
  </div>

  <div className='d-flex flex-wrap gap-3'>
  <div className="mb-3">
    <label className="form-label">Property Type</label>
    <select 
    className="form-select w-100" 
    value={propertyType}
    onChange={(e) => setPropertyType(e.target.value)}>
    <option value="residential">Residential</option>
    <option value="townhouse">Townhouse</option>
    <option value="condo">Condo</option>
    <option value="commercial">Commercial</option>
    <option value="multifamily">Multi-Family</option>
    </select>
  </div>
  <div className="mb-3">
    <label className="form-label">NeighbourHood</label>
    <select 
    className="form-select w-100"
    value={neighbourhood}
    onChange={(e) => setNeighbourHood(e.target.value)} >
    <option value="bronte">Bronte</option>
    <option value="brontecreek">Bronte Creek</option>
    <option value="burlington">Burlington</option>
    <option value="oakVille">OakVille</option>
    <option value="clearview">ClearView</option>
    <option value="collegepark">College Park</option>
    <option value="mississauga">Mississauga</option>
    <option value="brampton">Brampton</option>
    <option value="gta">Rest Of GTA</option>
    </select>
  </div>
  </div>
  

  <div className='mb-3'>
    <label className='form-label'>Choose Only 3 Images</label>
    <input type="file" multiple accept='image/*' onChange={(e) => setAddedPhotos(e.target.files)}/>
    <button onClick={handleUpload}>Upload Image</button>

    <div className='d-flex flex-column w-50 outer-pic'>
    <div className='pic-div'>
      {photoLink && photoLink.map((photo, index)=>(
        <img src={photo} key={`index-${index}`} className='img-fluid' alt='property' />
      ))}
    </div>
    </div>
  </div>

  <div className='d-flex flex-wrap gap-3'>
  <div className="mb-3">
    <label className="form-label">No. of Beds</label>
    <input type="number" value={beds} onChange={(e) => setBeds(e.target.value)} className="form-control w-100" style={{border:'1px solid rgb(197 197 197)'}} />
  </div>
  <div className="mb-3">
    <label className="form-label">No. of Bathrooms</label>
    <input type="number" value={bathroom} onChange={(e) => setBathroom(e.target.value)} className="form-control w-100" style={{border:'1px solid rgb(197 197 197)'}} />
  </div>
  </div>

  <div className="mb-3">
    <label className="form-label">Description</label>
    <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
  </div>

  <button type="submit" className="btn btn-primary mb-5">Submit</button>
    </form>
   </div>
  )
}

export default AdminForm