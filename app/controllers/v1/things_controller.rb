class V1::ThingsController < ApplicationController
  def index
    render json: { things: [
      name: 'some-thing',
      guid: '04032121-21321321-421414'
    ] }.to_json
  end
end
