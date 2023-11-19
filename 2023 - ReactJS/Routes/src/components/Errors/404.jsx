export default function Error404(){
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
      <div className="container-fluid py-5">
        <h1 className="display-5 fw-bold">This page does not exist !</h1>
        <p className="col-md-8 fs-4">Website returned error 404, that means you tried to access page that does not exist !</p>
        <a href="/" className="btn btn-primary btn-lg">Back to home</a>
      </div>
    </div>
    )
}