import QRCode from 'react-native-qrcode-svg';

export function QRCodeGenerator({ value, getRef }) {
  return (
    <QRCode
      value={JSON.stringify({ value })}
      size={250}
      color="#18181b"
      backgroundColor="#cbd5e1"
      getRef={getRef}
    />
  );
}
