import {Routes, Route} from 'react-router-dom';
import {Videobeams, SolicitarPrestamoVideobeam, Home, AddRoom, AddVideobeam} from '../../Pages';

export function WebRouters() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/addvideobeam' element={<AddVideobeam />} />
      <Route path='/addroom' element={<AddRoom />} />
      <Route path='/videobeam' element={<Videobeams />} />
      <Route path='/solicitarprestamovideobeam' element={<SolicitarPrestamoVideobeam />} />
    </Routes>
  )
}
