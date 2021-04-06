import React, { useContext, useRef, useEffect } from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext)
  const text = useRef('')

  useEffect(() => {
    if (filtered === null) {
      text.current.value = ''
    }
  })

  const { filterContacts, clearFilter, filtered } = contactContext

  const onChange = (e) => {
    if (text.current.value !== '') {
      filterContacts(e.target.value)
    } else {
      clearFilter()
    }
  }

  return (
    <form>
      <input
        ref={text}
        type='text'
        placeholder='filter Contacts...'
        onChange={onChange}
      />
    </form>
  )
}

export default ContactFilter

//useRef a way to reference an actual DOM object
