import { useEffect, useState } from 'react'
import Success from '../Success'
import GenerationForm from '../GenerationForm'

const Content = ({ inviteCode }) => {
  const [config, setConfig] = useState({})
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchConfig() {
      const response = await fetch(`${process.env.REACT_APP_LAMBDA_URL}/invite/${inviteCode}`)

      if (response.ok) {
        const { openvpn } = await response.json()

        setConfig(openvpn[0])
      } else {
        setError(response.status)
      }

      setLoading(false)
    }

    fetchConfig();
  }, [inviteCode])

  return (
    loading
      ? <div>Loading...</div>
      : error
        ? <div>Failed to fetch data associated with current invite code: {error}</div>
        : config
          ? <Success config={config} />
          : <GenerationForm inviteCode={inviteCode} />
  );
}

export default Content;
