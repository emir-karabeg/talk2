'use client'

import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [action, setAction] = useState('')

  const handleCall = async () => {
    console.log('test')
    const response = await fetch('/api/makeCall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber }),
    })

    const data = await response

    if (response.status === 200) {
      console.log(data)
      alert('Call initiated! Check the console for more details.')
    } else {
      console.error('Error:', data)
      alert('Failed to initiate call.')
    }
  }

  const test = async () => {
    const response = await fetch('/api/findOption', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: 'For customer support, press 1. For the finance department, press 2. If you have lost your bag, press 3.',
      }),
    })

    const data = await response

    if (response.status === 200) {
      console.log(data)
      alert('Test complete')
    } else {
      console.error('Error:', data)
      alert('Failed')
    }
  }

  const createCall = async () => {
    const response = await fetch('/api/createCall', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber }),
    })

    const data = await response

    if (response.status === 200) {
      console.log(data)
      alert('Call created! Check the console for more details.')
    } else {
      console.error('Error:', data)
      alert('Failed to initiate call.')
    }
  }

  const updateNumber = async () => {
    const response = await fetch('/api/updateNumber', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber }),
    })

    const data = await response

    if (response.status === 200) {
      console.log(data)
      alert('Number updated! Check the console for more details.')
    } else {
      console.error('Error:', data)
      alert('Failed to update number.')
    }
  }

  const updateGoal = async () => {
    const response = await fetch('/api/updateGoal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ to: phoneNumber }),
    })

    const data = await response

    if (response.status === 200) {
      console.log(data)
      alert('Number updated! Check the console for more details.')
    } else {
      console.error('Error:', data)
      alert('Failed to update number.')
    }
  }

  return (
    <main className={styles.main}>
      <input
        className={styles.input}
        placeholder="Enter a phone number"
        value={phoneNumber}
        onChange={(e) => {
          setPhoneNumber(e.target.value)
        }}
      />
      <input
        className={styles.input}
        placeholder="What do you want to do?"
        value={action}
        onChange={(e) => {
          setAction(e.target.value)
        }}
      />
      <button className={styles.button} onClick={handleCall}>
        Action
      </button>
      <button className={styles.button} onClick={test}>
        TEST
      </button>
      <button className={styles.button} onClick={createCall}>
        Create Call
      </button>
      <button className={styles.button} onClick={updateNumber}>
        Update Number
      </button>
      <button className={styles.button} onClick={updateGoal}>
        Update Goal
      </button>
    </main>
  )
}
