class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      {
        name: 'some-thing',
        guid: '09021930921040218401243092130219'
      }
    ] }.to_json
  end
end
