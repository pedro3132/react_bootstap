import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

  export default function formu() {
  return (
<>
<Form>
  {['checkbox', 'radio'].map(type => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check inline label="Sim" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="Não" type={type} id={`inline-${type}-2`} />
      <Form.Check
        inline
        disabled
        label="Numca te amei"
        type={type}
        id={`inline-${type}-3`}
      />
    </div>
  ))}
</Form>
</>
  );
}