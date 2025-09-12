import { Button, Text, TextInput } from '@mantine/core';
import Service from '../utils/http'
import { useClipboard } from '@mantine/hooks';
import QRCode from 'react-qr-code';
const obj = new Service();


export default function UrlResponse(props) {
    const clipboard = useClipboard({ timeout: 500 });
    const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
    return (
        <div>
            <Text size="xl">ShortenUrl</Text>

            <TextInput
                value={surl}
                onChange={(e) => surl(e.currentTarget.value)}
                placeholder="Enter URL"
                rightSection={
                    <Button
                        compact
                        color={clipboard.copied ? 'teal' : 'blue'}
                        onClick={() => clipboard.copy(surl)}
                    >
                        {clipboard.copied ? 'Copied!' : 'Copy'}
                    </Button>
                }
            />

            <div style={{ height: 'auto', margin: '20px auto', maxWidth: 256, width: '100%' }}>
                <QRCode
                    size={256}
                    style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                    value={surl || ' '}
                    viewBox={`0 0 256 256`}
                />
            </div>
        </div>
    )
}

