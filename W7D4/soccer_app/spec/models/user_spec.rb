require 'rails_helper'

RSpec.describe User, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  # validations
  # let(:invalid_user) { User.new(username: '', password: 'password', session_token: 'fjidosap') }
  describe "uniqueness" do
    subject(:user) do 
      User.create(
        username: 'rayzah_blaydes',
        password: 'dingos'
      )
    end
    it {should validate_uniqueness_of(:username)}
  end

  it {should validate_presence_of(:username)}
  it {should validate_presence_of(:password_digest)}
  it {should validate_length_of(:password).is_at_least(6)}
  it {should validate_presence_of(:session_token)}
  # associations
  it {should have_many(:goals)}

  # for uniqueness, we need a subject created

  
  subject(:user) { FactoryBot.create(:user) }

  # ? what kind of test would this be ? 
  describe 'password encryption' do
        it 'does not save passwords to the database' do
            FactoryBot.create(:user, username: 'rayzah_blaydes', password: 'password') 
            user = User.find_by(username: 'rayzah_blaydes')
            expect(user.password).to_not be('password')
        end

        it 'encrypts password using BCrypt' do
            expect(BCrypt::Password).to receive(:create).with('123456')
            FactoryBot.build(:user, password: '123456')
        end
    end
end
