declare namespace Mime {
  type MimeTypes = 'text/plain' | 'application/json' | 'application/octet-stream' | ''
  type AcceptValues = 'string' | 'number' | 'object' | 'array' | 'buffer'
}

declare function Mime(value: Mime.AcceptValues): Mime.MimeTypes

export = Mime