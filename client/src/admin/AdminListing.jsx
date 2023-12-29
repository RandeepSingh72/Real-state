import React, {useState} from 'react'
import AdminNavbar from './AdminNavbar'
import AdminForm from './AdminForm'

const AdminListing = () => {
  const [propertyName, setPropertyName] = useState('');
  const [address, setAddress] = useState('');
  const [saleType, setSaleType] = useState('forsale');
  const [featured, setFeatured] = useState('yes');
  const [areaSq, setAreaSq] = useState('');
  const [propertyType, setPropertyType] = useState('residential');
  const [neighbourhood, setNeighbourHood] = useState('bronte');
  const [addedPhotos, setAddedPhotos] = useState([]);
  const [photoLink, setPhotoLink] = useState([])
  const [beds, setBeds] = useState('');
  const [bathroom, setBathroom] = useState('');
  const [description, setDescription] = useState('');

   const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://real-state-a2po.vercel.app/api/admin/create-property', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          propertyName,
          address,
          saleType,
          featured,
          areaSq,
          propertyType,
          neighbourhood,
          photoLink,
          beds,
          bathroom,
          description
        }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result); // Handle the response as needed
      } else {
        console.error('Error:', response.status, response.statusText);
      }
      setPropertyName(''),setAddress(''),setAddedPhotos([]),setAreaSq(''), setBathroom(''), setBeds(''), setFeatured('yes'), setSaleType('forsale'), setNeighbourHood('bronte'), setPropertyType('residentail'), setPhotoLink([]), setDescription('')
    } catch (error) {
      console.error('Error:', error);
    }
   }

  return (
    <div>
        <AdminNavbar/>
        <div className='mt-3'>
        <AdminForm
        type="Create"
        handleSubmit={handleSubmit}
        propertyName={propertyName}
        setPropertyName={setPropertyName}
        address={address}
        setAddress={setAddress}
        saleType={saleType}
        setSaleType={setSaleType}
        featured={featured}
        setFeatured={setFeatured}
        areaSq={areaSq}
        setAreaSq={setAreaSq}
        propertyType={propertyType}
        setPropertyType={setPropertyType}
        neighbourhood={neighbourhood}
        setNeighbourHood={setNeighbourHood}
        addedPhotos={addedPhotos}
        setAddedPhotos={setAddedPhotos}
        photoLink={photoLink}
        setPhotoLink={setPhotoLink}
        beds={beds}
        setBeds={setBeds}
        bathroom={bathroom}
        setBathroom={setBathroom}
        description={description}
        setDescription={setDescription}
        />
        </div>
    </div>
  )
}

export default AdminListing