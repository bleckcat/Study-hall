const EN_US = {
  translation: {
    http: {
      connect: {
        title: 'Connect',
        paragraph: [
          'This method starts two-way communications with the requested resource. It can be used to open a tunnel.',
          'For example, it can be used to access websites that use SSL(HTTPS).'
        ]
      },
      delete: {
        title: 'Delete',
        paragraph: ['Deletes the specified resource in the data base.']
      },
      get: {
        title: 'Get',
        paragraph: [
          'This method requests a representation of the specified resource. Requests using GET should only be used to request data.',
          'They do not have a request body.'
        ]
      },
      head: {
        title: 'Head',
        paragraph: [
          "This method requests the headers that would be returned if the HEAD request's URL was instead requested with HTTP GET method.",
          'For example, if a URL might produce a large download, a HEAD request could read its Content-Length header to check the filesize without actually downloading the file.'
        ]
      },
      options: {
        title: 'Options',
        paragraph: [
          'This method requests permitted communication options for a given URL or server.'
        ]
      },
      patch: {
        title: 'Patch',
        paragraph: [
          'This request method applies partial modifications to a resource.',
          'PATCH is somewhat analogous to the "update" concept found in CRUD.',
          'A PATCH request is considered a ser of instructions on how to modify a resource. Contrast this with PUT; which is a complete representation of a resourse.'
        ]
      },
      post: {
        title: 'Post',
        paragraph: [
          'This method sends data to the server. The type of the body of the request is indicated by the Content-Type header.',
          'The difference between PUT and POST is that PUT is idempotent: calling it onde or several times successively has the same effect (that is no side effect), where successive identical POST may have additional effects, like passing an order several times.'
        ]
      },
      put: {
        title: 'Put',
        paragraph: [
          'This method creates a new resource or replaces a representation of the target resource with the rquest payload.'
        ]
      },
      trace: {
        title: 'Trace',
        paragraph: [
          'This method performs a message loop-back test along the path to the target resource, providing a useful debugging mechanism.'
        ]
      }
    }
  }
};

export default EN_US;
