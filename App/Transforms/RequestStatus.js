export default function (status) {
  switch (status) {
    case 'accepted':
      return 'Disetujui'
    case 'rejected':
      return 'Ditolak'
    case 'pending':
      return 'Menunggu Persetujuan'
    default:
      return ''
  }
}
