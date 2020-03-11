require 'sqlite3'
require 'singleton'

class QuestionsDBConnection < SQLite3::Database
  include Singleton

  def initialize
    super('questions.db')
    self.type_translation = true
    self.results_as_hash = true
  end

end

class Question
  attr_accessor :title, :body, :associated_author_id
  def self.all
    data = QuestionsDBConnection.instance.execute('SELECT * FROM questions')
    data.map { |datum| Question.new(datum) }
  end
  
  def self.find_by_id(id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM questions WHERE id = #{id}")
    Question.new(info)
  end

  def self.find_by_author_id(author_id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM questions WHERE associated_author_id = #{author_id}")
    Question.new(info)
  end

  def initialize(options)
    @id = options['id']
    @title = options['title']
    @body = options['body']
    @associated_author_id = options['associated_author_id']
  end


  def create 
    raise "#{self} already in database" if @id
    QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @associated_author_id)
      INSERT INTO
        questions (title, body, associated_author_id)
      VALUES
        (?, ?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @title, @body, @associated_author_id, @id)
      UPDATE
        questions
      SET
        title = ?, body = ?, associated_author_id = ?
      WHERE
        id = ?
    SQL
  end

end

class User
  attr_accessor :id, :fname, :lname
  def self.all
    data = QuestionsDBConnection.instance.execute('SELECT * FROM users')
    data.map { |datum| User.new(datum) }
  end

  def self.find_by_id(id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM users WHERE id = #{id}")
    User.new(info)
  end

  def self.find_by_name(fname, lname)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM users WHERE fname = #{fname} AND lname = #{lname}")
    User.new(info)
  end
  
  def initialize(options)
    @id = options["id"]
    @fname = options["fname"]
    @lname = options["lname"]
  end

  def authored_questions
    
  end

  def create 
    raise "#{self} already in database" if @id
    QuestionsDBConnection.instance.execute(<<-SQL, @fname, @lname)
      INSERT INTO
        users (fname, lname)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @fname, @lname, @id)
      UPDATE
        users
      SET
        fname = ?, lname = ?
      WHERE
        id = ?
    SQL
  end
end

class QuestionFollow
  attr_accessor :id, :user_id, :question_id
  def self.all
    data = QuestionsDBConnection.instance.execute('SELECT * FROM question_follows')
    data.map { |datum| QuestionFollow.new(datum) }
  end

  def initialize(options)
    @id = options["id"]
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end

  def self.find_by_id(id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM question_follows WHERE id = #{id}")
    QuestionFollow.new(info)
  end

  def create 
    raise "#{self} already in database" if @id
    QuestionsDBConnection.instance.execute(<<-SQL, @user_id, @question_id)
      INSERT INTO
        question_follows (user_id, question_id)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @user_id, @question_id, @id)
      UPDATE
        question_follows
      SET
        user_id = ?, question_id = ?
      WHERE
        id = ?
    SQL
  end
end

class Reply
  attr_accessor :id, :subject_question_id, :body, :user_id, :parent_reply_id
  def self.all
    data = QuestionsDBConnection.instance.execute('SELECT * FROM replies')
    data.map { |datum| Reply.new(datum) }
  end
  
  def self.find_by_id(id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM replies WHERE id = #{id}")
    Reply.new(info)
  end

  def self.find_by_user_id(user_id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM replies WHERE user_id = #{user_id}")
    Reply.new(info)
  end

  def self.find_by_question_id(question_id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM replies WHERE question_id = #{question_id}")
    Reply.new(info)
  end

  def initialize(options)
    @id = options["id"]
    @subject_question_id = options["subject_question_id"]
    @body = options["body"]
    @user_id = options["user_id"]
    @parent_reply_id = options["parent_reply_id"]
  end


  def create 
    raise "#{self} already in database" if @id
    QuestionsDBConnection.instance.execute(<<-SQL, @subject_question_id, @body, @user_id, @parent_reply_id)
      INSERT INTO
        replies (subject_question_id, body, user_id, parent_reply_id)
      VALUES
        (?, ?, ?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @subject_question_id, @body, @user_id, @parent_reply_id, @id)
      UPDATE
        replies
      SET
        subject_question_id = ?, body = ?, user_id = ?, parent_reply_id = ?
      WHERE
        id = ?
    SQL
  end
end

class QuestionLike
  attr_accessor :id, :user_id, :question_id
  def self.all
    data = QuestionsDBConnection.instance.execute('SELECT * FROM question_likes')
    data.map { |datum| QuestionLike.new(datum) }
  end

  def initialize(options)
    @id = options["id"]
    @user_id = options["user_id"]
    @question_id = options["question_id"]
  end

  def self.find_by_id(id)
    info = QuestionsDBConnection.instance.execute("SELECT * FROM question_likes WHERE id = #{id}")
    QuestionLike.new(info)
  end

  def create 
    raise "#{self} already in database" if @id
    QuestionsDBConnection.instance.execute(<<-SQL, @user_id, @question_id)
      INSERT INTO
        question_likes (user_id, question_id)
      VALUES
        (?, ?)
    SQL
    @id = QuestionsDBConnection.instance.last_insert_row_id
  end

  def update
    raise "#{self} not in database" unless @id
    QuestionsDBConnection.instance.execute(<<-SQL, @user_id, @question_id, @id)
      UPDATE
        question_likes
      SET
        user_id = ?, question_id = ?
      WHERE
        id = ?
    SQL
  end
end