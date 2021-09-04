declare namespace ValueMime {
  type MimeTypes = 'text/plain' | 'application/json' | 'application/octet-stream' | ''
  type AcceptValues = 'string' | 'number' | 'object' | 'array' | 'buffer'
}

declare function ValueMime(value: ValueMime.AcceptValues): ValueMime.MimeTypes

export = ValueMime