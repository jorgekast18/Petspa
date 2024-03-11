require 'rails_helper'

RSpec.describe "Homes", type: :request do
  describe "GET /Welcome" do
    it "returns http success" do
      get "/home/Welcome"
      expect(response).to have_http_status(:success)
    end
  end

end
