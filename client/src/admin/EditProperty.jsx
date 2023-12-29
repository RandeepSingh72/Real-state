import React, {useState, useEffect} from 'react'
import AdminNavbar from './AdminNavbar'
import { useParams, useNavigate } from 'react-router-dom';
import AdminForm from './AdminForm';

const EditProperty = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

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

  
  useEffect(() => {
    const fetchPropertyDetails = async () => {
        try {
          const response = await fetch(`https://real-state-a2po.vercel.app/api/admin/properties/${propertyId}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setPropertyName(data.propertyName),setAddress(data.address),setSaleType(data.saleType),setFeatured(data.featured),setAreaSq(data.areaSq),setPropertyType(data.propertyType),setNeighbourHood(data.neighbourhood),setPhotoLink(data.photoLink),setBeds(data.beds),setBathroom(data.bathroom),setDescription(data.description)
        } catch (error) {
          console.error('Error fetching property details:', error.message);
        }
       
      };
    fetchPropertyDetails();

    
  }, [propertyId]);
  
  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
        const response = await fetch(`https://real-state-a2po.vercel.app/api/admin/property/${propertyId}`, {
          method: 'PUT',
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
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Redirect back to the property list after update
        navigate('/admin/admin-dashboard');
      } catch (error) {
        console.error('Error updating property:', error.message);
      }

  }
  
  return (
    <div>
        <AdminNavbar/>
        <div className='mt-3'>
        <AdminForm
        type="Edit"
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

export default EditProperty