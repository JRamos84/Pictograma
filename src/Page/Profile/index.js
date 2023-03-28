import Avatar, { genConfig } from 'react-nice-avatar'

export default function Profile () {
  const config = genConfig({ sex: 'man', hairStyle: 'mohawk' })
  return (
    <>
      <h1 className='text-white my-2'>Perfil</h1>
      <Avatar style={{ width: '8rem', height: '8rem' }} {...config} />
    </>

  )
}
