import './App.css'

import { lazy, Suspense } from 'react';

function App() {
  
  const CLOUDINARY_IMAGE_IDS = {
    image1_1: '1.1_n2v4iy',
    image1_2: '1.2_lamhm5',
    image2_1: '2.1_xjoanr',
    image2_3: '2.3_osn1d6',
    image3_1: '3.1_ypowra',
    image3_2: '3.2_kcx9ka',
    image4_1: '4.1_pn4jlg',
    image4_2: '4.2_hf0rpx',

    image1_1_a: '1.1_oytj7l',
    image1_2_a: '1.2_nb1sb1',
    image2_1_a: '2.1_kixaqy',
    image2_2_a: '2.2_xe3j0h',
    image3_1_a: '3.1_sugon3',
    image3_2_a: '3.2_knor0b',
    image4_1_a: '4.1_fvgp0v',
    image4_2_a: '4.2_rlf8ma',

    image_brand_1: '1_zrcnvr',
    image_brand_2: '2_mpvccv',
    image_brand_3: '3_lyj1hd',
    image_brand_4: '4_es7u1d',
    image_brand_5: '5_idnxct',
    image_brand_6: '6_eegzwz',
    
    brand_1: '1_f33lpa',
    brand_1_1: '1.1_ct0hd7',
    brand_1_2: '1.2_ntlzze',
    brand_1_3: '1.3_fi2ti1',
    brand_2: '2_nj3a2a',
    brand_2_1: '2.1_aqsp8a',
    brand_2_2: '2.2_gsrm9w',
    brand_2_3: '2.3_x4ozur',
    brand_3: '33_ctxpkh',
    brand_3_1: '3.1_r7xevw',
    brand_3_2: '3.2_mbr82p',
    brand_3_3: '3.3_vutrue',
  };
  
  const data = [
    {
      image_1: CLOUDINARY_IMAGE_IDS.image1_1,
      image_2: CLOUDINARY_IMAGE_IDS.image1_2,
      heading: "Hooded Cardigan",
      subheading: "KILLSTAR",
      price: 100
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image2_1,
      image_2: CLOUDINARY_IMAGE_IDS.image2_3,
      heading: "Badlands Dress",
      subheading: "KILLSTAR",
      price: 105
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image3_2,
      image_2: CLOUDINARY_IMAGE_IDS.image3_1,
      heading: "Mystiqueaux Vest",
      subheading: "KILLSTAR",
      price: 45
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image4_1,
      image_2: CLOUDINARY_IMAGE_IDS.image4_2,
      heading: "Eerie Pythia Dress",
      subheading: "KILLSTAR",
      price: 64
    }
  ]
  const data_2 = [
    {
      image_1: CLOUDINARY_IMAGE_IDS.image1_1_a,
      image_2: CLOUDINARY_IMAGE_IDS.image1_2_a,
      heading: "Oversized Knit Pullover",
      subheading: "CEST NOUS",
      price: 150
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image2_1_a,
      image_2: CLOUDINARY_IMAGE_IDS.image2_2_a,
      heading: "Slim Off-Shoulder Top",
      subheading: "CEST NOUS",
      price: 100
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image3_2_a,
      image_2: CLOUDINARY_IMAGE_IDS.image3_1_a,
      heading: "Hooded Layered Jacket",
      subheading: "CEST NOUS",
      price: 135
    },
    {
      image_1: CLOUDINARY_IMAGE_IDS.image4_1_a,
      image_2: CLOUDINARY_IMAGE_IDS.image4_2_a,
      heading: "Contrast Layered Blouse",
      subheading: "CEST NOUS",
      price: 140
    }
  ]

  const data_3 = [
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_1 },
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_2 },
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_3 },
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_4 },
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_5 },
    { name: "Open Aesthetics", image: CLOUDINARY_IMAGE_IDS.image_brand_6 },
  ]

  const data_4 = [
    {
        brand_img: CLOUDINARY_IMAGE_IDS.brand_1,
        image_1: CLOUDINARY_IMAGE_IDS.brand_1_1,
        image_2: CLOUDINARY_IMAGE_IDS.brand_1_2,
        image_3: CLOUDINARY_IMAGE_IDS.brand_1_3,
        background: "transparent",
    },
    {
        brand_img: CLOUDINARY_IMAGE_IDS.brand_2,
        image_1: CLOUDINARY_IMAGE_IDS.brand_2_1,
        image_2: CLOUDINARY_IMAGE_IDS.brand_2_2,
        image_3: CLOUDINARY_IMAGE_IDS.brand_2_3,
        background: '#79787d',
    },
    {
        brand_img: CLOUDINARY_IMAGE_IDS.brand_3,
        image_1: CLOUDINARY_IMAGE_IDS.brand_3_1,
        image_2: CLOUDINARY_IMAGE_IDS.brand_3_2,
        image_3: CLOUDINARY_IMAGE_IDS.brand_3_3,
        background: '#c9c8d1',
    },
  ]
  const LandingPage = lazy(() => import('./pages/LandingPage'));

  return (
      <Suspense fallback={
        <div className='flex items-center justify-center h-screen w-screen'>
          <h1 className='font-romantic text-4xl md:text-6xl lg:text-8xl'>
            Loading...
          </h1>
        </div>
      }>
        <LandingPage
          data_1={data}
          data_2={data_2}
          data_3={data_3}
          data_4={data_4} />
    </Suspense>
  )
}

export default App
