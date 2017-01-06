require 'test_helper'

class Api::V1::PropertiesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @api_v1_property = api_v1_properties(:one)
  end

  test "should get index" do
    get api_v1_properties_url, as: :json
    assert_response :success
  end

  test "should create api_v1_property" do
    assert_difference('Api::V1::Property.count') do
      post api_v1_properties_url, params: { api_v1_property: { description: @api_v1_property.description, title: @api_v1_property.title } }, as: :json
    end

    assert_response 201
  end

  test "should show api_v1_property" do
    get api_v1_property_url(@api_v1_property), as: :json
    assert_response :success
  end

  test "should update api_v1_property" do
    patch api_v1_property_url(@api_v1_property), params: { api_v1_property: { description: @api_v1_property.description, title: @api_v1_property.title } }, as: :json
    assert_response 200
  end

  test "should destroy api_v1_property" do
    assert_difference('Api::V1::Property.count', -1) do
      delete api_v1_property_url(@api_v1_property), as: :json
    end

    assert_response 204
  end
end
