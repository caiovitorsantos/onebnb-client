class Api::V1::PropertiesController < ApplicationController
  before_action :set_api_v1_property, only: [:show, :update, :destroy]

  # GET /api/v1/properties
  # GET /api/v1/properties.json
  def index
    @api_v1_properties = Api::V1::Property.all
  end

  # GET /api/v1/properties/1
  # GET /api/v1/properties/1.json
  def show
  end

  # POST /api/v1/properties
  # POST /api/v1/properties.json
  def create
    @api_v1_property = Api::V1::Property.new(api_v1_property_params)

    if @api_v1_property.save
      render :show, status: :created, location: @api_v1_property
    else
      render json: @api_v1_property.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /api/v1/properties/1
  # PATCH/PUT /api/v1/properties/1.json
  def update
    if @api_v1_property.update(api_v1_property_params)
      render :show, status: :ok, location: @api_v1_property
    else
      render json: @api_v1_property.errors, status: :unprocessable_entity
    end
  end

  # DELETE /api/v1/properties/1
  # DELETE /api/v1/properties/1.json
  def destroy
    @api_v1_property.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_api_v1_property
      @api_v1_property = Api::V1::Property.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def api_v1_property_params
      params.require(:api_v1_property).permit(:title, :description)
    end
end
